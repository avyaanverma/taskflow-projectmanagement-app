import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import ProjectPage from '../pages/ProjectPage.jsx';
import Settings  from '../pages/Settings.jsx';
import Notifications from '../pages/Notifications.jsx';
import AppLayout from '../layouts/AppLayout.jsx';
import Home from "../pages/Home.jsx"

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: "login",
                    element: <Login/>
                },
                {
                    path: "register",
                    element: <Register/>
                }
            ]
        },

        {
            path: "/dashboard",
            element: <AppLayout/>,
            children: [
                {
                    index: true,
                    element: <Dashboard/>
                },
                {
                    path: "project/:id",
                    element: <ProjectPage/>
                }
            ]
        },
        {
            path: "/notifications",
            element: <Notifications/>
        },
        {
            path: "/settings",
            element: <Settings/>
        }

    ]);

    return (
        <RouterProvider router={router}/>
    )
}
export default AppRoutes
