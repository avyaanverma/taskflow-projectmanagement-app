const projectModel = require("../models/project.model");

const getProjects = async (req, res)=>{
    console.log(req);
    
    const projects = await projectModel.find();

    return res.status(200).json({
        message: "Projects fetched successfully",
        projects : projects
    })
}

const getSingleProject = ()=>{
    
};

const createProject = async (req, res)=>{
    // the user who created the project will be admin
    // also we will check if admin added any members and we will add it to members list;
    const {user, name, description} = req.body;
    const {id} = user.id;
    const project = await projectModel.create({
        name: name,
        description: description,
        member: [
            {
                user: id,
                role: "admin"
            }
        ]
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