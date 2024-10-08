import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors'
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

app.use(cors())
app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(9000,()=>console.log('server is running on port : \'9000\'!'))