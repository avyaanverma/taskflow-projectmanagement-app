import { API } from "./api";


export const fetchAllProjects = async () =>{
    let res = await API.get("/projects")
    return res.data.projects;  
};

export const fetchProject = async (id)=>{
    let res = await API.get(`/projects/${id}`);
    return res.data.project;  

}

export const deleteProject = async (id)=>{
    let res = await API.delete(`/projects/${id}`);
    return res.data.project;
}

export const createProject = async (data)=>{
    let res = await API.post(`/projects`, data);
    return res.data.project;
}

export const updateProject = async (id, project)=>{
    let res = await API.update(`/projects/${id}`, project);
    return res.data.project;

}
