import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";

const app = express();

app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

try{
    await client.connect();
    console.log("Atlas connected!");
}catch(e){
    console.log("failed connect to mondo db", e);
    process.exit(1);
}

const db = await client.db("Score_Tracker");
const connection = db.collection("Atlas_dashboard");
