require('dotenv').config();
const express=require("express");
const app= express()
const bp=require("body-parser");
const router=require('./router/userRouter')

// db connect
const dbConnect = require("./dbconnect");
app.use(express.json())

const PORT=process.env.PORT;

app.use("/api/",router)


app.listen(PORT,(req,res)=>{
    console.log(`server running successfully ${PORT} `);
})