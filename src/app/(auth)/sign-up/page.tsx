'use client';
import CountrySelectField from '@/components/forms/CountrySelectField';
import FooterLink from '@/components/forms/FooterLink';
import SelectField from '@/components/forms/SelectField';
import InputField from '@/components/forms/inputField';
import { Button } from '@/components/ui/button';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
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
            error = {errors.fullName}
            validation = {{required:'Full name is required', minLength: 2}}/>

            <InputField
            name = "email"
            label = "Email"
            placeholder = "johndoe@email.com"
            register = {register}
            error = {errors.email}
            validation = {{required:"Email is required" , pattern: '/^\w+@\w+\.\w+$', message: "Email address is required" }}/>

            <InputField
            name = "password"
            label = "Password"
            type='password'
            placeholder = "Enter a strong password"
            register = {register}
            error = {errors.password}
            validation = {{required:'Password is required', minLength: 6}}/>


            <CountrySelectField
            name = "country"
            label = "Country"
            control = {control}
            error = {errors.country}
                       
            />

            <SelectField
            name="investmentGoals"
            placeholder='Select your investment goal'
            label="Investment Goals"
            options = {INVESTMENT_GOALS}
            errors = {errors.investmentGoals}
            control = {control}
            required/>

            <SelectField
            name="riskTolerance"
            label="Risk Tolerance"
            placeholder='Select your Risk Level'
            options = {RISK_TOLERANCE_OPTIONS}
            errors = {errors.riskTolerance}
            control = {control}
            required/>

            <SelectField
            name="preferredIndustry"
            label="Preferred Industry"
            placeholder='Select your Preferred Industry'
            options = {PREFERRED_INDUSTRIES}
            errors = {errors.preferredIndustry}
            control = {control}
            required/>

            <Button type = "submit" disabled = {isSubmitting} className='yellow-btn w-full mt-5'>

                {isSubmitting? 'Creating Account': 'Start your Investing Journey'}
            </Button>

            <FooterLink text = {'Already have an account'} linkText={'Sign in'} href = "/sign-in"/>

            
            </form>
    </>
  )
}

export default SignUp;