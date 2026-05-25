// components/dashboard/TaskColumn.jsx

import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks }) => {
    return (
        <div className="bg-gray-100 dark:bg-slate-900/40 rounded-2xl p-4 min-h-100">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-slate-100">
                    {title}
                </h2>

                <span className="bg-white dark:bg-slate-900 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200 dark:border-slate-800">
                    {tasks.length}
                </span>
            </div>

            <div className="space-y-4">
                {tasks.map((task, index) => (
                    <TaskCard key={index} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
