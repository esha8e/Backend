
const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")

const{userModel}=require("./userModel")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://sruthi:sruthikukku@cluster0.9ku0d77.mongodb.net/eshopDB?retryWrites=true&w=majority")

app.post("/login",async(req,res)=>{
    const loginpg=req.body
    console.log(loginpg)
  const ob=new userModel(loginpg)
  ob.save((error,data)=>{

    if(error)
    {
        res.send("error occured")

    }
    else
    {
        res.send(data)
    }
  })

})

app.post("/signin",async(req,res)=>{
  const signinpg=req.body
  console.log(signinpg)
  const ob=new signinModel(signinpg)
  
})




app.listen(3200,()=>{console.log("server running at https://localhost:3200")
})