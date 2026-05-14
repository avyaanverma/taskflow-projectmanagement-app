const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const {JWT_SECRET} = require("../config/cred");
const crypto = require("crypto"); 

const registerUser = async (req,res)=>{
    const {name, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({email});

    if(isUserAlreadyExists){
        return res.status(400).json({
            message: "User Email Already Exists"
        })
    }


    // password hash
    const hashedPassword = crypto.createHash("md5").update(password).digest("hex");

    const user = await userModel.create({
        name: name,
        email: email.toLowerCase(),
        password: hashedPassword,
    })

    // create a token
    const token = jwt.sign({
        id: user.id,
        email: user.email
    },JWT_SECRET, {
        expiresIn: "7d"
    });

    // store cookies
    res.cookie("jwt_secret", token, {
        httpOnly: true,
        secure: false, // in product false-> true
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
        message: "User successfully created",
        user: user
    })
}

const loginUser =  async (req,res)=>{
    const {email, password } = req.body;

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(400).json({
            message: "User not Found"
        })
    }

    const isValid = crypto.createHash("md5").update(password).digest("hex") === user.password;

    if(!isValid){
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, JWT_SECRET,{
        expiresIn: "7d"
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
module.exports = {
    registerUser,
    loginUser
}