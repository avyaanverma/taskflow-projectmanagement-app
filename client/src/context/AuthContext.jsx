import { useState } from "react";
import { getMe, loginUserAuth, registerUserAuth } from "../api/auth.api";
import { createContext } from "react";
import toast from "react-hot-toast";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const fetchUser = async ()=>{
        try{
            const newUser = await getMe();
            setUser(newUser);
        } catch(error){
            setUser(null)
        } finally{
            setLoading(false);
        }
    }

    const loginUser = async (data)=>{
        const user = await loginUserAuth(data);
        toast.success("Login successful!");
        setUser(user);
        setLoading(false);

    }
    const registerUser = async (data)=>{
        const registeredUser = await registerUserAuth(data);
        setUser(registeredUser);
        toast.success("Registration successful.");
        setLoading(false);
    }

    return <AuthContext.Provider value={{user, fetchUser, loginUser, registerUser, loading}}>
        {children}
    </AuthContext.Provider>
}

