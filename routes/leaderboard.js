import express from "express";
import Score from "../models/Score.js";

const router = express.Router();

router.get("/:game", async (req, res) => {
    try {
        const { game } = req.params;

        const results = await Score.aggregate([
            {
                $match: {
                    game: game
                }
            },
            {
                $sort: {
                    points: -1
                }
            },
            {
                $limit: 10
            }
        ]);

        const leaderboard = results.map((score, index) => {
            return {
                rank: index + 1,
                playerName: score.playerName,
                points: score.points,
                level: score.level
            };
        });

        res.json(leaderboard);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "Failed to create score"
        });
    }
});

export default router;