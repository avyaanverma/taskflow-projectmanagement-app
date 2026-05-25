import React from "react";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
    const navigate = useNavigate();
    const {loginUser} = useContext(AuthContext);
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        mode: "onChange",
    })

    const handleFormSubmit = (data)=>{
        loginUser(data);
        reset();
        navigate("/dashboard");
    };
    return (
        <div className="min-h-screen bg-[#d9d9d9] flex items-center justify-center px-4">
            <div className="w-full max-w-6xl h-175 bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

                {/* Left Side */}
                <div className="relative hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                        alt="nature"
                        className="h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#04123d]/40" />

                    {/* Welcome Text */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
                        <h1 className="text-white text-5xl tracking-[12px] font-light">
                            WELCOME
                        </h1>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-center px-10 md:px-20 bg-[#fdfdfd] p-10">

                    {/* Heading */}
                    <div className="mb-12 ">
                        <h2 className="text-4xl font-bold text-[#04123d]">Login</h2>

                        <p className="text-gray-500 mt-3">
                            Welcome back! Please login to continue.
                        </p>
                    </div>

                    {/* Google Sign In */}
                    <button
                        className="w-full border border-gray-300 hover:border-[#04123d] hover:bg-gray-50 transition-all duration-300 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-sm mb-8"
                    >
                        <FcGoogle size={18} />

                        <span className="text-sm font-semibold text-gray-700">
              Sign in with Google
            </span>
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-[1px] bg-gray-300" />

                        <span className="text-sm text-gray-400">
              OR
            </span>

                        <div className="flex-1 h-[1px] bg-gray-300" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">

                        {/* Email */}
                        <div>
                            <label className="block text-gray-500 mb-2 text-sm">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border-b border-gray-400 bg-transparent outline-none py-3 text-base focus:border-[#04123d] transition-all duration-300"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-gray-500 text-sm">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-xs text-[#04123d] hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border-b border-gray-400 bg-transparent outline-none py-3 text-base focus:border-[#04123d] transition-all duration-300"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#04123d] hover:bg-[#0a1f63] text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg mt-8"
                        >
                            Login
                        </button>
                    </form>

                    {/* Bottom Text */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <span
                                onClick={()=> navigate("/register")}
                                className="text-[#04123d] font-semibold cursor-pointer hover:underline">
                                Sign up
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;