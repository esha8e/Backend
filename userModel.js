const Mongoose=require("mongoose")
const userModel=Mongoose.model("users",Mongoose.Schema({
    loginpgemail:String,
    loginpgpassword:String,
}))
module.exports={userModel}