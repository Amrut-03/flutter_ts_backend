import { Router } from "express";
import { createTweetController, deleteTweetController, getTweetController, updateTweetController } from "../controllers/tweet.controller";

const tweetRouter = Router();

// Default route paths

tweetRouter.get("/:tweetId",getTweetController);
//tweetRouter.get("/:tweetId",getALLTweetController);
tweetRouter.post("/",createTweetController);
tweetRouter.delete("/:tweetId", deleteTweetController);
tweetRouter.put("/",updateTweetController);

export default tweetRouter;