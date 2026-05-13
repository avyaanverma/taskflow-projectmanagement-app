import { useState } from "react";

import {
    useNavigate,
    useLocation,
} from "react-router";

import { projects } from "../../data/projects";

import {
    LayoutDashboard,
    FolderKanban,
    Bell,
    Settings,
    Sun,
    Moon,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [collapsed, setCollapsed] =
        useState(false);

    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={`
                ${
                    collapsed
                        ? "w-[90px]"
                        : "w-[320px]"
                }

                bg-white dark:bg-slate-900
                border-r
                border-gray-200 dark:border-slate-800
                flex
                flex-col
                h-screen
                transition-all
                duration-300
            `}
        >

            {/* Top */}
            <div
                className="
                    h-20
                    flex
                    items-center
                    justify-between
                    px-5
                    border-b
                "
            >

                {/* Logo */}
                {!collapsed && (
                    <h1
                        className="
                            text-3xl
                            font-black
                            text-black dark:text-white
                        "
                    >
                        TaskFlow
                    </h1>
                )}

                <div className="flex items-center gap-2">
                    {/* Theme Button */}
                    <button
                        onClick={toggleTheme}
                        className="
                            p-2
                            rounded-lg
                            hover:bg-gray-100 dark:hover:bg-slate-800
                            transition
                        "
                        aria-label="Toggle theme"
                        title={theme === "dark" ? "Light mode" : "Dark mode"}
                    >
                        {theme === "dark" ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    {/* Toggle Button */}
                    <button
                        onClick={() =>
                            setCollapsed(!collapsed)
                        }
                        className="
                            p-2
                            rounded-lg
                            hover:bg-gray-100 dark:hover:bg-slate-800
                            transition
                        "
                        aria-label="Toggle sidebar"
                    >
                        {collapsed ? (
                            <PanelLeftOpen size={22} />
                        ) : (
                            <PanelLeftClose size={22} />
                        )}
                    </button>
                </div>
            </div>

            {/* Main Menu */}
            <div className="px-3 pt-5 space-y-2">

                {/* Dashboard */}
                <button
                    onClick={() =>
                        navigate("/dashboard")
                    }
                    className={`
                        w-full
                        flex
                        items-center
                        ${
                            collapsed
                                ? "justify-center"
                                : "gap-3"
                        }
                        px-4
                        py-3
                        rounded-xl
                        transition

                        ${
                            location.pathname ===
                            "/dashboard"

                                ? "bg-black text-white"

                                : "hover:bg-gray-100 dark:hover:bg-slate-800"
                        }
                    `}
                >

                    <LayoutDashboard size={20} />

                    {!collapsed && "Dashboard"}

                </button>

                {/* Notifications */}
                <button
                    onClick={() =>
                        navigate("/notifications")
                    }

                    className="
                        w-full
                        flex
                        items-center
                        px-4
                        py-3
                        rounded-xl
                        hover:bg-gray-100 dark:hover:bg-slate-800
                        transition
                    "
                >

                    <Bell size={20} />

                    {!collapsed && (
                        <span className="ml-3">
                            Notifications
                        </span>
                    )}

                </button>

                {/* Settings */}
                <button
                    onClick={() =>
                        navigate("/settings")
                    }

                    className="
                        w-full
                        flex
                        items-center
                        px-4
                        py-3
                        rounded-xl
                        hover:bg-gray-100 dark:hover:bg-slate-800
                        transition
                    "
                >

                    <Settings size={20} />

                    {!collapsed && (
                        <span className="ml-3">
                            Settings
                        </span>
                    )}

                </button>
            </div>

            {/* Projects */}
            <div
                className="
                    mt-8
                    px-3
                    overflow-auto
                    flex-1
                "
            >

                {/* Heading */}
                <div
                    className={`
                        flex
                        items-center
                        mb-4

                        ${
                            collapsed
                                ? "justify-center"
                                : "justify-between"
                        }
                    `}
                >

                    {!collapsed && (
                        <h2
                            className="
                                text-lg
                                font-bold
                                text-slate-900 dark:text-slate-100
                            "
                        >
                            Projects
                        </h2>
                    )}

                    <FolderKanban size={20} />

                </div>

                {/* Project List */}
                <div className="space-y-2">

                    {projects.map((project) => (

                        <button
                            key={project.id}

                            onClick={() =>
                                navigate(
                                    `/dashboard/project/${project.id}`
                                )
                            }

                            className={`
                                w-full
                                rounded-2xl
                                border
                                transition

                                ${
                                    collapsed
                                        ? "p-3 flex justify-center"
                                        : "p-4 text-left"
                                }

                                ${
                                    location.pathname ===
                                    `/dashboard/project/${project.id}`

                                        ? "bg-black text-white"

                                        : "hover:bg-gray-100 dark:hover:bg-slate-800 bg-white dark:bg-slate-900"
                                }
                            `}
                        >

                            {collapsed ? (

                                <FolderKanban size={20} />

                            ) : (

                                <>
                                    <div className="font-semibold">
                                        {project.name}
                                    </div>

                                    <div
                                        className={`
                                            text-sm
                                            mt-1

                                            ${
                                                location.pathname ===
                                                `/dashboard/project/${project.id}`

                                                    ? "text-gray-300"

                                                    : "text-gray-500"
                                            }
                                        `}
                                    >
                                        {project.category}
                                    </div>
                                </>
                            )}

                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
