const express=require("express")
const app=express()

const PORT=4004
app.listen(PORT,(req,res)=>{
    console.log(`server is running on the port 🚀 ${PORT}🚀`)
})