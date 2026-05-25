// components/dashboard/TaskCard.jsx

const TaskCard = ({ task }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 overflow-hidden">
            <div className="h-2 bg-black" />

            <div className="p-5">
                <div className="flex justify-between items-center">
                    <span className="bg-gray-100 dark:bg-slate-800 text-sm px-3 py-1 rounded-full">
                        {task.priority}
                    </span>

                    <span className="text-sm text-gray-500 dark:text-slate-400">
                        {task.date}
                    </span>
                </div>

                <h2 className="text-xl font-bold mt-5">
                    {task.title}
                </h2>

                <p className="text-gray-500 dark:text-slate-400 mt-3 text-sm">
                    Project task management and workflow.
                </p>
            </div>
        </div>
    );
};

export default TaskCard;
