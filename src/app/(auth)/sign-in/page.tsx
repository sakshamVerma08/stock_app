'use client';
import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/inputField';
import { Button } from '@/components/ui/button';
import { signInWithEmail } from '@/lib/actions/auth-actions';
import { useRouter } from 'next/navigation';
import React from 'react'
import{useForm} from "react-hook-form";
import { toast } from 'sonner';

type Props = {};

const SignIn = (props: Props) => {

  
  const router = useRouter();


  const {
    register,
    handleSubmit,
    control,
    formState:{
      errors,isSubmitting},

    } = useForm<SignInFormData>({

      defaultValues:{
        email: '',
        password: ''
      }
    });
  

  const onSubmit = async(data: SignInFormData)=>{

    try{
        const response = await signInWithEmail(data);

        if(response){
          router.push('/');
        }

    }catch(err){
      console.error(err);
      toast.error('Sign in Failed', {
                description: err instanceof Error? err.message : 'Failed to Log into your account'
        });
      
    }
  }

  return (
    <>

      <h1 className='form-title'>Log In your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

        <InputField
        label="Email"
        name="email"
        placeholder='johndoe@email.com'
        register={register}
        error = {errors.email} 
        validation={{required:"Email is required", pattern: '/^\w+@\w+\.\w+$'}}
        />
        <InputField
        label="Password"
        name="password"
        placeholder='Enter your Password'
        register={register}
        error = {errors.password} 
        validation={{required:"Password is required", minLength: 6}}
        />


         <Button type = "submit" disabled = {isSubmitting} className='yellow-btn w-full mt-5'>

                {isSubmitting? 'Logging Into your Account': 'Log In'}
            </Button>

            <FooterLink text = {'Create a new Account'} linkText={'Sign Up'} href = "/sign-up"/>



      </form>

    </>
  )

}

export default SignIn;