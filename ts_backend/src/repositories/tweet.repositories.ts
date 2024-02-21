import mongoose from "mongoose";
import TweetModel from "../database/models/tweet.model";
import { ITweetInterface } from "../database/interfaces/tweet.interface";

export const gettweetRepo = async (
  tweetId: string
): Promise<ITweetInterface | null> => {
  try {
    const tweet = await TweetModel.findOne({ tweetId: tweetId });
    return tweet;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deletetweetRepo = async (tweetId: string): Promise<boolean> => {
  try {
    const deleted = await TweetModel.findOneAndDelete({ tweetId: tweetId });
    if (deleted) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createtweetRepo = async (
  tweet: ITweetInterface
): Promise<boolean> => {
  try {
    await TweetModel.create(tweet);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updatetweetRepo = async (
  tweetId: string,
  updatedtweet: ITweetInterface
): Promise<boolean> => {
  try {
    const result = await TweetModel.findOneAndUpdate(
      { tweetId: tweetId },
      updatedtweet,
      { new: true }
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
