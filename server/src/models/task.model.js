const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    tite: {
        type: String,
        trim: true,
        required: [true, "Task name is required"],
        minLength: [3, "Task length should be atleast 3 chars"],
        maxLength: [30, "Task Length cannot exceed 30 chars"]
    },
    description: {
        type: String,
        trim: true,
        maxLength: 500,
    },
    status: {
        type: String,
        enum: [
            "todo",
            "inprogress",
            "inreview",
            "completed"
        ],
        default: "todo"
    },
    prioriy:{
        type: String,
        enum: [
            "low",
            "medium",
            "high",
        ],
        default: "todo"
    },
    tags: [
        {
            type: String,
            trim: true
        }
    ],

})

module.exports = new mongoose.model("Task", taskSchema);
