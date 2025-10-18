import {connectToDB} from "../db/mongoose";

async function main(){

	try{

		await connectToDB();

		console.log("OK: Connection to Database successful");
		process.exit(0);

	}catch(err){


		console.error("ERROR: Database connection failed");
		console.error(err);
		process.exit(0);
	}

}

main();
