import Sidebar  from '../components/dashboard/Sidebar'
import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = () => {
    return (
        <div className="flex bg-[#f5f7fb] dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}
export default AppLayout
