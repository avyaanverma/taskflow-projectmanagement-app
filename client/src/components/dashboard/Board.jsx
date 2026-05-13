// components/dashboard/Board.jsx

import TaskColumn from "./TaskColumn";

const todoTasks = [
    {
        title: "Design Landing Page",
        priority: "High",
        date: "12 Jan",
    },
    {
        title: "Fix Authentication",
        priority: "Medium",
        date: "15 Jan",
    },
];

const progressTasks = [
    {
        title: "API Integration",
        priority: "Low",
        date: "18 Jan",
    },
];

const doneTasks = [
    {
        title: "Database Setup",
        priority: "Completed",
        date: "10 Jan",
    },
];

const Board = () => {
    return (
        <div className="flex-1 overflow-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <TaskColumn title="To Do" tasks={todoTasks} />
                <TaskColumn title="In Progress" tasks={progressTasks} />
                <TaskColumn title="Completed" tasks={doneTasks} />
            </div>
        </div>
    );
};

export default Board;