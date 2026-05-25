// pages/ProjectPage.jsx

import { useParams } from "react-router";

import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ProjectBoard from "../components/ProjectPage/ProjectBoard";
import { useProject } from "../hooks/useProject";
import { useEffect, useState } from "react";

const ProjectPage = () => {
    const { id } = useParams();
    const {projects, fetchAllProj} = useProject();
    
    useEffect(()=>{
        fetchAllProj();
        console.log(projects);
    }, [])
    
    const project = projects.find((p)=> p._id == id)
    console.log(project)

    if(!project){
        return <div>Loading....</div>
    }



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

                    <div className="mt-6 flex justify-end align-end text-xs text-gray-500 dark:text-slate-400">
                        <span  className="">🗑️ Delete Project →</span>
                    </div>
                    
                    <ProjectBoard project={project} />
                </div>
            </div>
    );
};

export default ProjectPage;