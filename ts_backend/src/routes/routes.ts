import { Router } from "express";
import userRouter from "./user.routes";
import tweetRouter from "./tweet.routes";
import helloRouter from "./hello.routes";

const router = Router()

router.use('/hello', helloRouter)  // this route for cecking server is live or not
router.use('/user',userRouter)   // this route for CRUD operations
router.use('/tweet',tweetRouter)  // this route for Tweet CRUD operations

export default router;