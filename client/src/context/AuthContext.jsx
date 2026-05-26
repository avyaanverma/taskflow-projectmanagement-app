import { useState } from "react";
import { getMe, loginUserAuth, registerUserAuth } from "../api/auth.api";
import { createContext } from "react";
import toast from "react-hot-toast";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async ()=>{
        try{
            const newUser = await getMe();
            setUser(newUser);
        } catch(error){
            console.log(error);
            toast.error("Something Went Wrong", {
                position: "bottom-right"
            });
            setUser(null);
        } finally{
            setIsLoading(false);
        }
    }

    const loginUser = async (data)=>{
        try {
            const user = await loginUserAuth(data);
            toast.success("Login successful!");
            setUser(user);
            return true;
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong", {
                position: "bottom-right"
            });
            return "error";
        } finally {
            setIsLoading(false);
        }

    }
    const registerUser = async (data)=>{
       try {
            const registeredUser = await registerUserAuth(data);
            setUser(registeredUser);
            toast.success("Registration successful.");
       } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong", {
                position: "bottom-right"
            });
       } finally{
            setIsLoading(false);
       }
    }

    return <AuthContext.Provider value={{user, fetchUser, loginUser, registerUser, isLoading}}>
        {children}
    </AuthContext.Provider>
}

