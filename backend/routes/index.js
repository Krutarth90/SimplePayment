import { Router } from "express";
import {userRouter} from './userRoutes.js'
import { accountRouter } from "./account.js";
const router = Router();

router.use('/user', userRouter);

router.use('/account', accountRouter);




export{
    router
} ;