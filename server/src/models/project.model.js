const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Project name is required"],
        minLength: [3, "Project length should be atleast 3 chars"],
        maxLength: [30, "Project Length cannot exceed 30 chars"]
    },
    description: {
        type: String,
        trim: true,
        maxLength: 500,
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
            trim: true, 
        }
    ],
    tags: [
        {
            type: String,
            trim: true

        }
    ],
    members: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            role: {
                type: String,
                enum: [
                    "admin",
                    "member"
                ],
                default: "admin"
            }
        }
    ]
}, {
    timestamps: true
})

const projectModel = new mongoose.model("Project", projectSchema);

module.exports = projectModel;