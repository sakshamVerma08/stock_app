'use client';
import InputField from '@/components/forms/inputField';
import { Button } from '@/components/ui/button';
import React from 'react'
import { SubmitErrorHandler, useForm } from 'react-hook-form';

const SignUp = () => {

    const {register,
        handleSubmit,
        control,
        formState: {errors,isSubmitting},

    } = useForm<SignUpFormData>({
        
        defaultValues: 
        
        {
        fullName: '',
        email: '',
        password : '',
        country: 'IN',
        investmentGoals: 'Growth',
        riskTolerance: 'Medium',
        preferredIndustry: 'Technology',
        },
    
    mode: 'onBlur'
});

    const onSubmit = async(data: SignUpFormData) =>{

        try{    
            console.log(data);

        }catch(err){
            console.error(err);
        }
    }
  return (
    <>
        <h1 className='form-title'>Signup & Personalize</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

            <InputField
            name = "fullname"
            label = "Full Name"
            placeholder = "John Doe"
            register = {register}
            errors = {errors.fullName}
            validation = {{required:'Full name is required', minLength: 2}}/>

            <Button type = "submit" disabled = {isSubmitting} className='yellow-btn w-full mt-5'>

                {isSubmitting? 'Creating Account': 'Start your Investing Journey'}
            </Button>

            
            </form>
    </>
  )
}

export default SignUp;