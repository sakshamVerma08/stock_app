// Writing from scratch for better clarity.
import {betterAuth} from "better-auth";
import {mongodbAdapter} from "better-auth/adapters/mongodb";
import {nextCookies} from "better-auth/next-js";
import { getDB } from "./db/mongoClient";


// First, we set authInstance to null. So when required, authInstance is assigned in the below variable, then we can re-use this variable again.
// We use singleton patter to prevent the creation of multiple authInstances.
let authInstance: ReturnType<typeof betterAuth> | null = null;


export const getAuth = async()=>{

    /*
    1. First, we check if authInstance already exists. if yes, then return the same authInstance.
    2. If it doesn't exist, then we proceed by getting the MongoDB connection, then we initialize our own authInstance.
    */

    if(authInstance) return authInstance;


    const db = await getDB();


    if(!db) throw new Error("MongoDB connection not found! Cannot pass it to Better-auth MongoDB adapter");

    // Now we can proceed to create our new authInstance.

    authInstance = betterAuth({
        database: mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword:{
            enabled:true,
            disableSignUp:false,
            requireEmailVerification: false,
            minPasswordLength: 6,
            maxPasswordLength: 128,
            autoSignIn:true
        },

        plugins: [nextCookies()],
    });


    return authInstance;
};


export const auth = await getAuth();