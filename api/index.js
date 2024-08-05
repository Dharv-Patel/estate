import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
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

app.use('/api',userRouter)

app.listen(9000,()=>console.log('server is running on port : \'9000\'!'))