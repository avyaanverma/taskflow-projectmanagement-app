import React, { useContext, useEffect } from 'react'
import {Outlet, useNavigate} from "react-router";
import { AuthContext } from '../context/AuthContext';

const AuthLayout = () => {
    const {user, fetchUser, isLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user);
    
    useEffect(()=>{
        ;(async function(){
            await fetchUser(); 
        })();
    }, []);
    
    console.log(user);
    if(isLoading){
        return <div>Loading......</div>
    }
    if(user){
        navigate("/dashboard");
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default AuthLayout
