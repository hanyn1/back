const express=require('express')
const mongoose=require('mongoose')
const app=express()
const url = "mongodb://127.0.0.1:27017/hkStore";
const morgan=require('morgan')
app.use(morgan('dev'))
async function connectDb(){
    try{
        await mongoose.connect(url)
        console.log("connected")
    }catch(err){
        console.log(err)
    }
}
connectDb()
//require path
const getProd=require('./views/getProduiRoute')
//define path of view
app.use('/get',getProd)
//creation server
app.listen("7000",()=>{
    console.log("server is running")
})