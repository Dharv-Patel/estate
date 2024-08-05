import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req,res)=>{
    const { username, email, password } = req.body;
    const haspassword = bcryptjs.hashSync(password)
    const newUser = new User({username, email, password: haspassword})
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
}