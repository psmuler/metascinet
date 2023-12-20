'use client'
import { Control } from '@radix-ui/react-form';
import { Button, Checkbox, TextArea, TextField, TextFieldInput } from '@radix-ui/themes';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface Form {
    name: string,
    email: string,
    related_work_ids: string
}
const FormDemo = () => {
    const { register, control, handleSubmit } = useForm<Form>();

    return (
        <form
            className='max-w-l space-y-2'
            onSubmit={handleSubmit((data) => console.log(data))}>
            <TextField.Root>
                <TextField.Input placeholder='organization' {...register('name')} />

            </TextField.Root>
            <TextField.Root>
                <TextField.Input placeholder='email' {...register('email')} />

            </TextField.Root>
            {/* <Controller
                name='related_work_ids'
                control={control}
                render={({ field }) => {
                    
                    // <TextArea placeholder='Description of your work'>{`${{ ...field }}`}</TextArea>

                }}
            /> */}
            <Button>Submit</Button>

        </form>
    )

    // <Form.Root className="w-[260px]">
    //     <Form.Field className="grid mb-[10px]" name="name">
    //         <div className="flex items-baseline justify-between">
    //             <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Organization</Form.Label>
    //             <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
    //                 Please enter the name of what you are doing, or the affiliation you are assigned to.
    //             </Form.Message>
    //         </div>
    //         <Form.Control asChild>
    //             <input
    //                 className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
    //                 type=""
    //                 required
    //             />
    //         </Form.Control>
    //     </Form.Field>
    //     <Form.Field className="grid mb-[10px]" name="email">
    //         <div className="flex items-baseline justify-between">
    //             <Form.Label className="text-[15px] font-medium leading-[35px] text-white">email</Form.Label>
    //             <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
    //                 Please enter your email
    //             </Form.Message>
    //             <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
    //                 Please provide a valid email
    //             </Form.Message>
    //         </div>
    //         <Form.Control asChild>
    //             <input
    //                 className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
    //                 type="email"
    //                 required
    //             />
    //         </Form.Control>
    //     </Form.Field>
    //     <Form.Field className="grid mb-[10px]" name="question">
    //         <div className="flex items-baseline justify-between">
    //             <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
    //                 Question
    //             </Form.Label>
    //             <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
    //                 Please enter a question
    //             </Form.Message>
    //         </div>
    //         <Form.Control asChild>
    //             <textarea
    //                 className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
    //                 required
    //             />
    //         </Form.Control>
    //     </Form.Field>
    //     <Form.Submit asChild>
    //         <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
    //             Post question
    //         </button>
    //     </Form.Submit>
    // </Form.Root>
};

export default FormDemo;