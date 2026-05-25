import Sidebar  from '../components/sidebar/Sidebar'
import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AppLayout = () => {
    const {user, fetchUser, loading} = useContext(AuthContext);

    const navigate = useNavigate();
    useEffect(()=>{
        fetchUser();
    }, [])
    if(loading){
        return <div>Loading......</div>
    }
    if(!user){
        navigate("/login");
    }
    console.log(user);
    
    return (
        <div className="flex bg-[#f5f7fb] dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}
export default AppLayout
