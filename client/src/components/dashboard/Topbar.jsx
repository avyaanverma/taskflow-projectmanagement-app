// components/dashboard/Topbar.jsx

import { Search } from "lucide-react";

const Topbar = ({ title, subtitle }) => {
    return (
        <div className="bg-white dark:bg-slate-900 px-8 py-6 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
            <div>
                <h1 className="text-4xl font-black text-gray-900 dark:text-slate-100">
                    {title}
                </h1>

                <p className="text-gray-500 dark:text-slate-400 mt-2">
                    {subtitle}
                </p>
            </div>

            <div className="bg-gray-100 dark:bg-slate-800 rounded-2xl px-5 py-3 flex items-center gap-3 w-[300px]">
                <Search size={18} className="text-gray-400 dark:text-slate-400" />

                <input
                    type="text"
                    placeholder="Search project..."
                    className="bg-transparent outline-none w-full text-slate-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-400"
                />
            </div>
        </div>
    );
};

export default Topbar;
