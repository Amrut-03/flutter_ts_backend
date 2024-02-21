import { Request, Response } from "express";
import {
  gettweetRepo,
  deletetweetRepo,
  updatetweetRepo,
  createtweetRepo,
} from "../repositories/tweet.repositories";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import { updatedUserWithTweetIdRepo } from "../repositories/user.repositories";
import UserModel from "../database/models/user.model";

export const getTweetController = async (req: Request, res: Response) => {
  const tweetId = req.params.tweetId as string;
  console.log(tweetId);

  try {
    const tweet = await gettweetRepo(tweetId);
    if (tweet) {
      res.status(200).json({ data: tweet });
    } else {
      res.status(500).json({ error: "Tweet Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const createTweetController = async (req: Request, res: Response) => {
  const tweet: ITweetInterface = req.body;
  try {
    const success = await createtweetRepo(tweet);
    if (success) {
      const userUpdateSuccess = await updatedUserWithTweetIdRepo(tweet.adminId,tweet.tweetId);
      if(userUpdateSuccess){
        res.status(200).json({ data: tweet });
      }
      else{
        res.status(500).json({error: "User Not Updated"})
      }
    } else {
      res.status(500).json({ error: "Tweet Not Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const updateTweetController = async (req: Request, res: Response) => {
  const updatedTweet: ITweetInterface = req.body;

  try {
    const success = await updatetweetRepo(updatedTweet.tweetId, updatedTweet);
    if (success) {
      res.status(200).json({ data: "Tweet Updated" });
    } else {
      res.status(500).json({ error: "Tweet Not Updated" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const deleteTweetController = async (req: Request, res: Response) => {
  const tweetId = req.params.tweetId as string;
  try {
    const success = await deletetweetRepo(tweetId);
    if (success) {
      res.status(200).json({ data: "Tweet Deleted" });
    } else {
      res.status(500).json({ error: "Tweet Not Deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
