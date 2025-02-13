import mongoose from "mongoose";

const URL = env(DATABSE_URL);
await mongoose.connect(URL);

const userSchema = new mongoose.Schema({
    username : String,
    fName : String,
    lName : String,
    password : String
});
const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
    balance : Number
})

const Account = mongoose.model('account', accountSchema);

const User = mongoose.model('User', userSchema);

export {
    User,
    Account
}
