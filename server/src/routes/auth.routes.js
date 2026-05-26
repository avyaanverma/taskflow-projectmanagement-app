const express = require("express");
const { registerUser, loginUser, getMe } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/register", registerUser)

authRouter.post("/login", loginUser)

authRouter.get('/me', getMe);

module.exports = authRouter;