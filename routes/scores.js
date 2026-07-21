import express from "express";
import Score from "../models/Score.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newScore = {
            playerName : req.body.playerName,
            game : req.body.game,
            points: req.body.points,
            level: req.body.level,
            duration :req.body.duration
        }
        const savedScore = await Score.create(newScore);

        res.status(201).json(savedScore);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Failed to create score"
        });
    }
});

export default router;