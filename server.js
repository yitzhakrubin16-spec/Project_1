import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import scoresRouter from "./routes/scores.js";

const app = express();

app.use(express.json());

app.use("/scores", scoresRouter);

const PORT = process.env.PORT || 3000;

try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Atlas connected!");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}catch(e){
    console.log("failed connect to mondo db", e);
    process.exit(1);
}

