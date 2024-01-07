'use client'

import { Button, Flex, Text, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface Form {
    name: string,
    email: string,
    description: string
}
const FormDemo = () => {
    const { register, handleSubmit } = useForm<Form>();

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data)
            })
            }>
            <Flex direction="column" align="center" gap="4" py="6">
                <Flex justify="center" direction="column" gap="2" >
                    <TextField.Root style={{ maxWidth: 500 }}>
                        <TextField.Input placeholder='Organization, Activity, Company name...' {...register('name')} />
                    </TextField.Root >
                    <div>
                        <TextField.Root style={{ maxWidth: 500 }}>
                            <TextField.Input placeholder='Contact (email)' {...register('email')} />

                        </TextField.Root>
                        <Text size={"1"}>*Your contact details must be disclosed to authenticated users only</Text>
                    </div>
                    <TextArea
                        style={{ maxWidth: 500, height: 200 }}
                        placeholder='Describe your organization, research, or activity in around 100 words or 400 characters'
                        {...register('description')}
                    />
                </Flex>
                <div>
                    <Button style={{}}>Send</Button>
                </div>
            </Flex>
        </form>
    )
};

export default FormDemo;