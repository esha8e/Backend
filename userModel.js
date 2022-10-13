const Mongoose=require("mongoose")
const userModel=Mongoose.model("signups",Mongoose.Schema({
    loginpgemail:String,
    loginpgpassword:String,
}))
module.exports={userModel}