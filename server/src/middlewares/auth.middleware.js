const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/cred");
const userModel = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
    try{
        const token = req.cookies.jwt_token;
        if(!token){
            return res.status(400).json({
                message: "Unauthorized error"
            })
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        if(!decoded){
            return res.status(400).json({
                message: "Unauthorized error"
            })
        }

        const user = await userModel.findById(decoded.id);

        req.user = user;

        next();

    } catch(err){
        return res.status(500).json({
            message: "Error in middleware",
            error: err
        })
    }
}


module.exports = {
    authMiddleware
}