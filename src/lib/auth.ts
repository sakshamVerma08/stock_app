import {betterAuth} from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
// import { connectToDB } from "../../db/mongoose";
import {nextCookies} from "better-auth/next-js";
import { getDB } from "./db/mongoClient";

let authInstance: ReturnType<typeof betterAuth> | null = null;


export const getAuth =async () => {
    
    if(authInstance) return authInstance;

    // const mongoose = await connectToDB();

    // if(!mongoose.conn){
    //     throw new Error("MongoDB connection not found");

    // }
    
    const db = await getDB();

    if(!db) throw new Error("MongoDB connection not found\n");


    authInstance = betterAuth({
        database: mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword:{
            enabled:true,
            disableSignUp: false,
            requireEmailVerification: true,
            minPasswordLength: 6,
            maxPasswordLength: 128,
            autoSignIn: true
        },

        plugins: [nextCookies()],
    });

    return authInstance;
};


export const auth = await getAuth();