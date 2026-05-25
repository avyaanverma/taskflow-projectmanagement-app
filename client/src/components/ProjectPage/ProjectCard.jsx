// components/dashboard/ProjectCard.jsx

import { useNavigate } from "react-router";

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    console.log(project)
    return (
        <div
            onClick={() =>
                navigate(`/dashboard/project/${project._id}`)
            }
            className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 p-6 cursor-pointer hover:shadow-xl transition"
        >
            <div className="flex items-center justify-between">
                <span className="bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm">
                    low
                </span>

                <span className="text-sm text-gray-500 dark:text-slate-400">
                    28%
                </span>
            </div>

            <h2 className="text-2xl font-bold mt-6">
                {project.name}
            </h2>

            <div className="mt-6">
                <div className="w-full h-3 bg-gray-100 dark:bg-slate-800 rounded-full">
                    <div
                        style={{
                            width: "28%",
                        }}
                        className="h-3 bg-black rounded-full"
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-between text-gray-500 dark:text-slate-400">
                <span>
                    {project.members.length} Members
                </span>

                <span>Open Project →</span>
            </div>

        </div>
    );
};

export default ProjectCard;
