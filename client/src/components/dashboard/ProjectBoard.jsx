// components/dashboard/ProjectBoard.jsx

import TaskColumn from "./TaskColumn";

const ProjectBoard = ({ project }) => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-8">
            <TaskColumn
                title="To Do"
                tasks={project.tasks.todo}
            />

            <TaskColumn
                title="In Progress"
                tasks={project.tasks.progress}
            />

            <TaskColumn
                title="In Review"
                tasks={project.tasks.review}
            />
        </div>
    );
};

export default ProjectBoard;