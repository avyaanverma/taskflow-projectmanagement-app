import {API} from "./api";

export const getMe = async ()=>{
    let res = await API.get("/auth/me", {
        withCredentials: true
    })
    if(!res.data){
        return null;
    } 
    return res.data.user;
}

export const registerUserAuth = async (data)=>{
    let res = await API.post("/auth/register", {
        data
    });

    return res.user;
}
export const loginUserAuth = async (data)=>{
    let res = await API.post("/auth/login", {
        data
    });
    console.log(res);
    return res.user;
}