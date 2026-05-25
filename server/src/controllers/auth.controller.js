const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const {JWT_SECRET} = require("../config/cred");
const crypto = require("crypto"); 

const registerUser = async (req,res)=>{
    try{
        console.log(req.body);
        const {fullName, email, password} = req.body.data;
        console.log(fullName);
        
        const isUserAlreadyExists = await userModel.findOne({email});
    
        if(isUserAlreadyExists){
            return res.status(400).json({
                message: "User Email Already Exists"
            })
        }
    
    
        // password hash
        // await bcrypt.hash(password, 10);
        // bcrypt.hashSync(password, 10);
        // salt rounds / cost factor
    
        const user = await userModel.create({
            name: fullName,
            email: email.toLowerCase(),
            password: password,
        })
    
        // create a token
        const token = user.generateJWT();
    
        // store cookies
        res.cookie("jwt_token", token, {
            httpOnly: true,
            secure: false, // in product false-> true
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
    
        return res.status(200).json({
            message: "User successfully created",
            user: user
        })
    } catch(e){
        return res.status(500).json({
            message: "Internal Server Error",
            err: e.message
        });
    }
}

const loginUser =  async (req,res)=>{
    console.log(req.body);
    const {email, password} = req.body.data;

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "User not Found"
        })
    }

    const isValid = user.comparePassword(password);

    if(!isValid){
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, JWT_SECRET,{
        expiresIn: "1h"
    });

    
    res.cookie("jwt_token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 7*24*60*60*1000
    });

    res.status(200).json({
        message: "User logged in successfully.",
        user
    })
}

const getMe = async (req,res)=>{
    try{
        const token = req.cookies.jwt_secret;

        if(!token) {
            return res.status(404).json({
                message: "Unauthorized Error",
            })
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        return res.json({
            message: "User Verified",
            user: decoded
        })
        
    } catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}