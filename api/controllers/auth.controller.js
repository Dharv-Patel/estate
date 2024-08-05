import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req,res,next)=>{
    try {
        const { username, email, password } = req.body;
        const haspassword = bcryptjs.hashSync(password)
        const newUser = new User({username, email, password: haspassword})
        await newUser.save()
        res.status(201).json("user add sucessfull")
    } catch (error) {
        next(error)
    }
}