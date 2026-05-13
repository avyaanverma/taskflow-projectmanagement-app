// components/dashboard/StatsCards.jsx

import { projects } from "../../data/projects";

const StatsCards = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            <div className="bg-black text-white rounded-3xl p-6">
                <p className="text-gray-300">
                    Total Projects
                </p>

                <h1 className="text-5xl font-black mt-4">
                    {projects.length}
                </h1>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800">
                <p className="text-gray-500 dark:text-slate-400">
                    In Progress
                </p>

                <h1 className="text-5xl font-black mt-4">
                    12
                </h1>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800">
                <p className="text-gray-500 dark:text-slate-400">
                    Completed
                </p>

                <h1 className="text-5xl font-black mt-4">
                    31
                </h1>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-800">
                <p className="text-gray-500 dark:text-slate-400">
                    Team Members
                </p>

                <h1 className="text-5xl font-black mt-4">
                    18
                </h1>
            </div>
        </div>
    );
};

export default StatsCards;
