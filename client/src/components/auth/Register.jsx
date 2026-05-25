import React from "react";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Register = () => {
    const navigate = useNavigate();
    const {registerUser} = useContext(AuthContext);
    
    const {

            register,
            reset,
            handleSubmit,
            watch,
            formState: {errors, isValid}

        } = useForm({
        mode: "onChange",
    });

    const handleFormSubmit = (data)=>
    {
        registerUser(data);
        reset();
        navigate("/dashboard");
    }

    return (
        <div className="min-h-screen bg-[#d9d9d9] flex items-center justify-center px-4">
            <div className="w-full max-w-6xl h-175 bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

                {/* Left Side */}
                <div className="flex flex-col justify-center md:px-20 bg-[#fdfdfd] p-10">`

                    {/* Heading */}
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold text-[#04123d]">
                            Register
                        </h2>

                        <p className="text-gray-500 mt-3 text-sm">
                            Create your account and start managing your team efficiently.
                        </p>
                    </div>

                    {/* Google Sign Up */}
                    <button
                        className="w-full border border-gray-300 hover:border-[#04123d] hover:bg-gray-50 transition-all duration-300 py-2 rounded-2xl flex items-center justify-center gap-3 shadow-sm mb-8"
                    >
                        <FcGoogle size={18} />

                        <span className="font-medium text-base text-gray-700">
                            Sign up with Google
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-[1px] bg-gray-300" />

                        <span className="text-xs text-gray-400">
                            OR
                        </span>

                        <div className="flex-1 h-[1px] bg-gray-300" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-1">

                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-500 mb-2 text-xs">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full border-b border-gray-400 bg-transparent outline-none py-3 text-base focus:border-[#04123d] transition-all duration-300"
                                {...register("fullName", {
                                    required: "Full name is required",
                                })}
                            />
                            {errors.fullname && <span className="text-red-500 text-xs">{errors.fullname.message}</span>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-500 mb-2 text-xs">
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
                            <label className="block text-gray-500 mb-2 text-xs">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Create a password"
                                className="w-full border-b border-gray-400 bg-transparent outline-none py-3 text-base focus:border-[#04123d] transition-all duration-300"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    }
                                })}
                            />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-gray-500 mb-2 text-xs">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full border-b border-gray-400 bg-transparent outline-none py-3 text-base focus:border-[#04123d] transition-all duration-300"
                                {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                    validate: (value) =>
                                        value === watch("password") || "Passwords do not match",
                                })}
                            />
                            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#04123d] hover:bg-[#0a1f63] text-white py-2 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg mt-2"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Bottom Text */}
                    <div className="mt-1 text-center">
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <span
                                onClick={()=> navigate("/login")}
                                className="text-[#04123d] font-semibold cursor-pointer hover:underline">
                                Login
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right Side */}
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
                            JOIN US
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;