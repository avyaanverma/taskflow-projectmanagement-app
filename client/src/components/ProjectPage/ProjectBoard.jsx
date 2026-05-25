// components/dashboard/ProjectBoard.jsx

import { useParams } from "react-router";
import TaskColumn from "./TaskColumn";
import { useState } from "react";
import axios from "axios";

const ProjectBoard = ({project}) => {
    const {id} = useParams();
    console.log(project)
    const tasks = project.tasks;
    return (
        <div className="grid grid-cols-3 gap-4 mt-2">
            <TaskColumn
                title="To Do"
                tasks={[]}
            />

            <TaskColumn
                title="In Progress"
                tasks={[]}
            />

            <TaskColumn
                title="In Review"
                tasks={[]}
            />
        </div>
    );
};

export default ProjectBoard;