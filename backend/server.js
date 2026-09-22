const express=require('express');
const mongoose=require('mongoose')
const app=express()
const cors=require('cors');
const dotenv=require('dotenv')
dotenv.config();
app.use(cors());
app.use(express.json());



if (!process.env.Mongodb_uri) {
    throw new Error("Mongodb_uri is missing from the environment")
}

mongoose.connect(process.env.Mongodb_uri)
.then(()=>console.log("mongodb connected successfully"))
.catch((e)=>console.log("Error occured: ",e))

app.get("/healthcheck", (req,res)=>{
    return res.send("heloo welcome to service hub")
})

app.listen(5000,()=>{
    console.log("Sever is created and started on port 5000")
})