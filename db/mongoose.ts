import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;


let cached = mongooseCache;

if(!cached){
    cached = {conn: null, promise: null};
}


export const connectToDB = async()=>{
    if(!MONGODB_URI) throw new Error("Couldn't access MONGODB_URI");

    if(cached.conn) return cached.conn;

    if(!cached.promise){

        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands:false
        })
    }



    try{
        cached.conn = await cached.promise;

    }catch(err){
        console.log("❌Connection to DB failed")
        cached.promise=null;
        throw err;
    }


    console.log(`✅Connected to DB in ${process.env.NODE_ENV} environment successfully`);
}


connectToDB();