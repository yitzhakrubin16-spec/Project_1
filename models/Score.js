import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
    {
        playerName : {
            type: String,
            required: true
        },

        game : {
            type: String,
            required: true
        },

        points : {
            type: Number,
            required: true,
            min: 0
        },

        level : {
            type: Number
        },

        duration : {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

const Score = mongoose.model("Score", scoreSchema);

export default Score;