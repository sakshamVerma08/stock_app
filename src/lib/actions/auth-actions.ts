'use server';
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