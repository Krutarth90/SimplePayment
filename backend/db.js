import mongoose from "mongoose";

await mongoose.connect('mongodb+srv://krutarthpipaliya90:NneDZYtRdaJHwnWd@cluster0.duhrz.mongodb.net/paytm');

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
