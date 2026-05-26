// pages/Dashboard.jsx
import axios from "axios";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatsCard from "../components/dashboard/StatsCard";
import ProjectCard from "../components/ProjectPage/ProjectCard";

import { useState, useEffect, useContext } from "react";
import { useProject } from "../hooks/useProject";
import CreateProject from "../components/dashboard/CreateProject";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
    const hour = new Date().getHours();
    const {user} = useContext(AuthContext);
    console.log(user);
    const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
            ? "Good Afternoon"
            : "Good Evening";

    const {projects, fetchAllProj} = useProject();

    useEffect(()=>{
        fetchAllProj();
    }, [])
    return (
            <div className="flex-1">
                <Topbar
                    title={`${greeting}, ${user.name} 👋`}
                    subtitle="Manage all your projects and teams"
                />

                <div className="p-8 relative">
                    <StatsCard />
                    {isProjectFormOpen && (
                        <CreateProject closeForm={setIsProjectFormOpen}/>
                    )}
                    <div className="mt-10">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-black">
                                Your Projects
                            </h1>

                            <button
                            onClick={()=> setIsProjectFormOpen(true)}
                            className="bg-black text-white px-6 py-3 rounded-2xl">
                                + Create Project
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {
                            projects.length > 0 ? 
                                projects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))

                                :

                                (<div>No projects to show.</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;