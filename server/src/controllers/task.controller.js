const taskModel = require("../models/task.model");

const gettasks = async (req, res)=>{
    const tasks = await taskModel.find({});

    return res.status(200).json({
        message: "tasks fetched successfully",
        tasks : tasks
    })
}

const getSingleTask = ()=>{

};

const createTask = ()=>{

};

const updateTask = ()=>{
};

const deleteTask = ()=>{

};

module.exports = {gettasks, getSingletask, createtask, updatetask, deletetask};