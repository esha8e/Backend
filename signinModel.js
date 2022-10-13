const Mongoose=require("mongoose")
const signinModel=Mongoose.model("signins",Mongoose.Scheme({
    signinpgemail:String,
    signinpgpassword:String,
})
)
module.exports={signinModel}