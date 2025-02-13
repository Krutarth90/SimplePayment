import { Router } from "express";
import jwt from "jsonwebtoken";
import { checkBody } from "./middlewares/inputVal.js";
import { Account, User } from "../db.js";
import { pass } from "../config.js";
import { auth } from "./middlewares/auth.js";


const userRouter = Router();

userRouter.post('/signup', checkBody, async (req, res) => {
    const username = req.body.username;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const password = req.body.password
    const found = await User.findOne({
        username : username
    })
    if(found)
    {
        res.status(400).json({
            msg : 'User exists'
        });
    }
    else
    {
        try {
            const newU = await User.create({
                username : username,
                fName : fName,
                lName : lName,
                password : password
            });
            await Account.create({
                userId : newU._id,
                balance : Math.floor(Math.random() * (10000 - 1) + 1)
            })
            res.status(200).json({
                msg : "signed Up"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message : "DB ERROR"
            })
        }  
    }
});


userRouter.post('/signin', async (req, res) => {
    const found = await User.findOne({
        username : req.body.username,
        password : req.body.password
    });

    if(!found)
    {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }
    const token = jwt.sign({id : found._id}, pass);
    res.status(200).json({
        token : token
    })
});

userRouter.put('/', auth, async (req, res) => {
    const id = req.id;
    const newPass = req.body.password;
    const newFName = req.body.fName;
    const newLName = req.body.lName;
    const updated = {};
    if(newPass.length > 5)
        updated.password = newPass;
    if(newLName)
        updated.lName = newLName;
    if(newFName)
        updated.fName = newFName;
    
    try {
        const newU = await User.updateOne({_id : id}, updated);
        res.status(200).json({
            msg : "Updated successfully",
        })
    } catch (error) {
        res.status(411).json({
            message: "Error while updating information"
        });
        console.log(error);
    }
})

userRouter.get('/bulk', auth, async (req, res) => {
    const filter = req.query.filter;

    const users = await User.find({
        $or : [{
            fName : {
                $regex : filter
            }}, {
            lName : {
                $regex : filter
            }}
        ]
    })
    res.status(200).json({
        users : 
            users.map((user) => {
                return {
                    firstName : user.fName,
                    lastName : user.lName,
                    id : user._id
                }
            })
    })
})





export {
    userRouter
}