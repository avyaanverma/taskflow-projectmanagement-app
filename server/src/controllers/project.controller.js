const projectModel = require("../models/project.model");

const getProjects = async (req, res)=>{
    const projects = await projectModel.find({});

    return res.status(200).json({
        message: "Projects fetched successfully",
        projects : projects
    })
}

const getSingleProject = ()=>{
    
};

const createProject = async (req, res)=>{
    const {name, description} = req.body;

    const project = await projectModel.create({
        name: name,
        description: description,
    });

    res.status(200).json({
        message: "Project created successfully",
        project: project
    });

}
const updateProject = ()=>{
}
const deleteProject = async (req, res)=>{
    const {id} = req.params;

    const project = await projectModel.findById(id);

    if(!project){
        return res.status(400).json({
            message: "Invalid Project Id",
        })
    }

    await projectModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Project deleted successfully",
    })
}

module.exports = {getProjects, getSingleProject, createProject, updateProject, deleteProject};