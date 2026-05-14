const express = require("express");
const {getProjects, getSingleProject, createProject, updateProject, deleteProject} = require("../controllers/project.controller")

const projectRoutes = express.Router();

projectRoutes
    .route("/")
    .get(getProjects)
    .post(createProject)

projectRoutes
    .route("/:id")
    .get(getSingleProject)
    .put(updateProject)
    .delete(deleteProject);


module.exports = projectRoutes;