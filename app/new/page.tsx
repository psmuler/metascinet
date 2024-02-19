'use client'

import { Button, Callout, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AlertOctagonIcon } from 'lucide-react';
import Spinner from '@/components/ui/spinner';
import { createActorSchema } from '@/lib/ActorSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"

type Form = z.infer<typeof createActorSchema>

const FormDemo = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<Form>({ resolver: zodResolver(createActorSchema) });
    const router = useRouter();
    const [error, setError] = useState('');
    const [isSending, setisSending] = useState(false)

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                if (!isValid) return false;
                try {
                    console.log("first")
                    setisSending(true)
                    await axios.post("/api/actors", data)
                    router.push("/")
                } catch (e) {
                    setError("unexpected error happened.")
                    setTimeout(function () {
                        setisSending(false)
                    }, 1000);
                }
            })
            }>
            <Flex direction="column" align="center" gap="4" py="6">
                <Flex justify="center" direction="column" gap="2" >
                    <TextField.Root style={{ maxWidth: 500 }}>
                        <TextField.Input placeholder='Your name, or your Organization, Activity, Company name...' {...register('name')} />
                    </TextField.Root >
                    {errors.name?.message && <Text color='red' size={"2"} as='p'>{errors.name.message}</Text>}

                    <div>
                        <TextField.Root style={{ maxWidth: 500 }}>
                            <TextField.Input placeholder='Contact (email)' {...register('email')} />

                        </TextField.Root>
                        {errors.email?.message && <Text color='red' size={"2"} as='p'>{errors.email?.message}</Text>}
                        <Text size={"1"}>*Your contact details must be disclosed to authenticated users only</Text>
                    </div>
                    <TextArea
                        style={{ maxWidth: 500, height: 200 }}
                        placeholder='Describe your organization, research, or activity in around 100 words or 400 characters'
                        {...register('description')}
                    />
                    {errors.description?.message && <Text color='red' size={"2"} as='p'>{errors.description?.message}</Text>}
                </Flex>
                {error && <Callout.Root color='red'>
                    <Callout.Icon><AlertOctagonIcon size={"18"} /></Callout.Icon>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>}
                <div>
                    <Button disabled={isSending}>{isSending ? <><Spinner />Sending...</> : <>Send</>}</Button>
                </div>
            </Flex>
        </form>
    )
};

export default FormDemo;