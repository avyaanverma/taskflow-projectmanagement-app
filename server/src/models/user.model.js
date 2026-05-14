const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [3, "Name must be atleast 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"],

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        match: [
            /^\S+@\S+\.\S+$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        trim:true,
        minLength: [6, "Password length should be atleast 6"],
        maxLength: [30, "Password length should not exceed 30"],
        select: false,
    },
    avatar: {
        type: String,
        default: ''
    },
    isOnline:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;