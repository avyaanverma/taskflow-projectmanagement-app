const express = require("express");

const taskRoutes = express.Router();

taskRoutes
    .route("/tasks")
    .get(gettasks)

taskRoutes
    .route("/tasks/:id")
    .get(getSingleTask)
    .post(createTask)
    .put(updateTask)
    .delete(deleteTask);


module.exports = taskRoutes;