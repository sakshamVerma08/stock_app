'use server';
import { headers } from "next/headers";
import { auth } from "../auth";
import { inngest } from "../inngest/client";


export const signUpWithEmail = async({email,password,fullName,country,investmentGoals, riskTolerance,preferredIndustry}: SignUpFormData)=>{

    try{

        const response = await auth.api.signUpEmail({
            body:{
                email: email,
                password: password,
                name:fullName
            }
        });
        

        if(response){
            inngest.send({
                name: 'app/user.created',
                
                data:{
                name: fullName,   
                email: email,
                fullName,
                country,
                investmentGoals,
                riskTolerance,
                preferredIndustry
                }
            });
        }


        return {success:true, data:response};


    }catch(err){
        console.error("Signup Failed", err);
        return {success:false, error: "Sign up failed"};
    }
}


export const signInWithEmail = async({email,password}: SignInFormData)=>{


    /*
    1. Firstly, we use the Better auth api to directly sign in with our email & password.
    2. If the response is successful, then we return success and the data.
    */

    try{

            const response = await auth.api.signInEmail({
                body:{
                    email,
                    password
                }
            });


            if(response) return {success:true, data: response};

    }catch(err){
        console.error("Sign In Failed: ", err);
        return {success:false, error: "Sign In Failed"};
    }

}


export const signOut = async()=>{

    try{
            const response = await auth.api.signOut({
                headers: await headers()
            });

            return {success:true, message:"Signout successful"};

           
    }catch(err){
        console.error(err);
        return {success:false, error:err};
    }
}