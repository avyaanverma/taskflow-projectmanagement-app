const express = require('express');
const authRoutes = require("./routes/auth.routes")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const projectRoutes = require('./routes/project.routes');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

module.exports = app;