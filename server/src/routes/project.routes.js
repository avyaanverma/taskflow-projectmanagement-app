const express = require("express");
const {getProjects, getSingleProject, createProject, updateProject, deleteProject} = require("../controllers/project.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const projectRoutes = express.Router();

projectRoutes
    .route("/")
    .all(authMiddleware)
    .get(getProjects)
    .post(createProject)

projectRoutes
    .route("/:id")
    .all(authMiddleware)
    .get(getSingleProject)
    .put(updateProject)
    .delete(deleteProject);


module.exports = projectRoutes;