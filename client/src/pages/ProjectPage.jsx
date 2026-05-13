// pages/ProjectPage.jsx

import { useParams } from "react-router";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Breadcrumbs from "../components/dashboard/Breadcrumbs";
import ProjectBoard from "../components/dashboard/ProjectBoard";

import { projects } from "../data/projects";

const ProjectPage = () => {
    const { id } = useParams();

    const project = projects.find(
        (p) => p.id === Number(id)
    );

    return (
            <div className="flex-1">
                <Topbar
                    title={project.name}
                    subtitle="Manage project tasks and team"
                />

                <div className="p-8">
                    <Breadcrumbs
                        items={[
                            "Dashboard",
                            "Projects",
                            project.name,
                        ]}
                    />

                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-black">
                            Your Tasks
                        </h1>

                        <button className="bg-black text-white px-6 py-3 rounded-2xl">
                            + Create Task
                        </button>
                    </div>

                    <ProjectBoard project={project} />
                </div>
            </div>
    );
};

export default ProjectPage;