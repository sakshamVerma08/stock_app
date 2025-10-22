import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri!);

let clientPromise : Promise<MongoClient>;

// Declaring the _mongoClientPromise property on the 'global' object of Nodejs.

declare global{

    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if(!global._mongoClientPromise){
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const getDB = async ()=>{

    const connectedClient = await clientPromise;
    return connectedClient.db();
}




