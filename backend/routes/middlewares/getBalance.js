import { Account } from "../../db.js";

async function getBalance (req, res, next) {
    const acc = await Account.findOne({
        userId : req.id
    });
    req.balance = acc.balance;
    next();
}

export {
    getBalance
}