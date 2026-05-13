// pages/Dashboard.jsx
import axios from "axios";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatsCard from "../components/dashboard/StatsCard";
import ProjectCard from "../components/dashboard/ProjectCard";

import { projects } from "../data/projects";
import { useEffect } from "react";

const Dashboard = () => {
    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
            ? "Good Afternoon"
            : "Good Evening";

    const [fetchProjects, setFetchProjects] = useState([]);
    console.log(fetchProjects);

    let fetchAllProjects = async () =>{
        let res = await axios.get("http://localhost:5500/api/projects");
        setAllProjects(res.data);
    }

    use

    return (
            <div className="flex-1">
                <Topbar
                    title={`${greeting}, Avyaan 👋`}
                    subtitle="Manage all your projects and teams"
                />

                <div className="p-8">
                    <StatsCard />

                    <div className="mt-10">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-black">
                                Your Projects
                            </h1>

                            <button 
                            onClick={}
                            className="bg-black text-white px-6 py-3 rounded-2xl">
                                + Create Project
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;