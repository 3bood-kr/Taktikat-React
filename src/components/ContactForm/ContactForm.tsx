import React, { useState } from 'react'
import Select from 'react-select';
import PhoneInput, { getCountries, getCountryCallingCode, isValidPhoneNumber } from 'react-phone-number-input/input'
import { FaUserFriends } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './ContactForm.css'
import { useForm, useController, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query';
import SweetAlert2 from 'react-sweetalert2';
import axios from 'axios';

const schema = z.object({
    name: z.string().min(1, {message: 'Name is Required'}),
    email: z.string().email(),
    phone: z.string().refine((data) => isValidPhoneNumber(data),
    {
        message: 'Invalid Phone Number'
    }),
    content: z.string().min(1, {message: 'Message is Required'}).max(300)
});

type FormData = z.infer<typeof schema>;

interface Props {
    label: string,
    type: string,

}

const options = getCountries().map((item) => (
    { label: item, value: getCountryCallingCode(item) }
));

export default function ContactForm() {
    const [swalProps, setSwalProps] = useState({});
    const { register, control, getValues, handleSubmit, formState: {errors} } = useForm<FormData>({ resolver: zodResolver(schema) });
    const { field } = useController({ name: 'phone', control })

    const mutation = useMutation({
        
        mutationFn: (formValues: FieldValues) => {
            return axios.post('https://api.taktikat.app/api/web/v2/contact-us',formValues);
        },
        onSuccess: (res) => {
            setSwalProps({
                show: true,
                title: 'Success',
                text: 'Your message has been sent successfully!',
                icon: 'success',
            });
        },
        onError: (err) => {
            setSwalProps({
                show: true,
                title: 'Error',
                text: 'There was an error sending your message. Please try again.',
                icon: 'error',
            });
        },
    });
    const handleSave = (formValues: FieldValues) => {
        mutation.mutate(formValues);
    };


    return (
        <>
            <SweetAlert2 {...swalProps} />
            <form onSubmit={handleSubmit(handleSave)}>
                <div className="pb-3">
                    <label className='form-label pb-1'>Name</label>
                    <div className='form-input d-flex align-tems-center p-3'>
                        <div className='px-2'>
                            <FaUserFriends size={20} color='#C90F8D' />
                        </div>
                        <div className="px-3 w-100">
                            <input {...register('name')} className='w-100' type="text" placeholder='Enter your name' />
                        </div>
                    </div>
                    <p className='text-danger'>{ errors.name?.message ?? '' }</p>
                </div>
                <div className="pb-3">
                    <label className='form-label pb-1'>Email</label>
                    <div className='form-input d-flex align-tems-center p-3'>
                        <div className='px-2'>
                            <MdEmail size={20} color='#C90F8D' />
                        </div>
                        <div className="px-3 w-100">
                            <input {...register('email')} className='w-100' type="email" placeholder='you@example.com' />
                        </div>
                    </div>
                    <p className='text-danger'>{ errors.email?.message }</p>
                </div>
                <div className="pb-3">
                    <label className='form-label pb-1'>Phone Number</label>
                    <div className='form-input d-flex align-tems-center p-3'>
                        {/* <div className='px-2'>
                            <Select
                                value={options.find(({value}) => value === field.value)}
                                onChange={(option) => { field.onChange(option?.value) }}
                                options={options}>
                            </Select>
                        </div> */}
                        <div className="px-3 w-100">
                            <PhoneInput onChange={(value) => {field.onChange(value)} } className='w-100'/>
                        </div>
                    </div>
                    <p className='text-danger'>{ errors.phone?.message }</p>
                </div>
                <div className="pb-3">
                    <label className='form-label pb-1'>Message</label>
                    <div className='form-input d-flex align-tems-center p-3'>
                        <div className='w-100'>
                            <textarea {...register('content')} className='w-100' cols={30} rows={5} placeholder='Type your message here...'></textarea>
                        </div>
                    </div>
                    <p className='text-danger'>{ errors.content?.message }</p>
                </div>
                <button className='main-button-style w-100 py-3 mt-2'>Submit</button>
            </form>
        </>
    )
}
