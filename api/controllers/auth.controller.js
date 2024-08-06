import User from "../models/user.model.js";
import { handelError } from "../utils/error.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const signin = async (req,res,next)=>{
    try {
        const {email,password} = req.body;
        const userData = await User.findOne({email})
        if(!userData)
            return next(handelError(404,'User Not Found'))
        const validPassword = await bcryptjs.compareSync(password,userData.password)
        if(!validPassword)
            return next(handelError(401,'Password is not correct'))
        const token = jwt.sign({id:userData._id},process.env.JWT_SECRET)

        const {password:pass,...rest} = userData._doc;
        res.cookie('Access_token',token,{httpOnly: true}).status(200).json(rest);
    } catch (error) {
        next(error)
    }
}