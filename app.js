
const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")

const{userModel}=require("./userModel")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://miniproject:mongoproject123@cluster0.k8mtxxj.mongodb.net/EshopDB?retryWrites=true&w=majority")

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





app.listen(3200,()=>{console.log("server running at https://localhost:3200")
})