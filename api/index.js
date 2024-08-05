const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();  // use it for env variable


mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log('DataBase Connected!');
    })
    .catch((err)=>{
    console.log(err);
})

const app = express()


app.listen(9000,()=>console.log('server is running on port : \'9000\'!'))