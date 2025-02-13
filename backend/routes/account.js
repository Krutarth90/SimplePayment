import { Router } from "express";
import { auth } from "./middlewares/auth.js";
import { Account } from "../db.js";
import { getBalance } from "./middlewares/getBalance.js";
import { startSession } from "mongoose";

const accountRouter = Router();

accountRouter.get('/balance', auth, getBalance, async (req, res) => {
    
    res.status(200).json({
        balance : req.balance
    });
})

accountRouter.post('/transfer', auth, getBalance, async (req, res) => {
    
    const sessionTransaction = await startSession();

    try {
        sessionTransaction.startTransaction();

        if(!req.body.amount || req.balance < req.body.amount)
        {
            await sessionTransaction.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({
            userId : req.body.to
        }).session(sessionTransaction);

        if(!toAccount)
        {
            await sessionTransaction.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        await Account.updateOne({
            userId : req.id
        }, {
            $inc : {
                balance : -req.body.amount
            }
        }).session(sessionTransaction);

        await Account.updateOne({
            userId : req.body.to
        }, {
            $inc : {
                balance : req.body.amount
            }
        }).session(sessionTransaction);

        await sessionTransaction.commitTransaction();

        res.status(200).json({
            message: "Transfer successful"
        })

    } catch (error) {
        await sessionTransaction.abortTransaction();
        console.log(error);
        res.status(500).json({
            message : "ERROR"
        })
    } finally {
        await sessionTransaction.endSession();
    }   
})
 

export {
    accountRouter
}