import { useState, createContext } from "react";
import { createProject, deleteProject, fetchAllProjects, fetchProject, updateProject } from "../api/projects.api";

export const ProjectContext = createContext();

export let ProjectProvider = ({children}) =>{
    const [projects, setProjects] = useState([]);

    const fetchAllProj = async ()=>{
        const fetchedProjects = await fetchAllProjects();
        setProjects(fetchedProjects);
    };  

    const createProj = async (project)=>{
        const createdProject = await createProject(project);
        setProjects((prev)=> [...prev, createdProject]);
    }

    const updateProj = async (project)=>{
        const updatedProj = await  updateProject(project.id, project);
        const updatedProjects = projects.map((p)=> {
            if(p.id == updatedProj.id){
                return updatedProj;
            } else{
                return p;
            }
        })
        setProjects(updatedProjects);
    }

    const deleteProj = async (id)=>{
        const deletedProject = await deleteProject(id);
        const deletedProjects = projects.filter( (p)=> deletedProject.id != p.id);
        setProjects(deletedProjects); 
    }

    return <ProjectContext.Provider 
        value={
            {projects,
            fetchAllProj,
            createProj,
            deleteProj,
            updateProj }
        }>
        {children}
    </ProjectContext.Provider>
}