import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (data.login === adminUsername && data.password === adminPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 p-12 bg-white flex flex-col justify-center">
        <div className="mb-12">
          {/* Replace with your logo */}
          <img
            src="../../src/assets/images/logo.png"
            alt="logo"
            className=" w-36"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">
          Secure Access for Legal Professionals
        </h1>
        <p className="my-6 text-3xl font-semibold">Login to Your Dashboard</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="login"
              placeholder="login "
              {...register("login", { required: "Login is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
            {errors.login && (
              <span className="text-red-500 text-sm">
                {errors.login.message}
              </span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              {...register("remember")}
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          {loginError && (
            <div className="text-red-500 text-sm">{loginError}</div>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            LOGIN
          </button>
        </form>
      </div>
      <div className="hidden md:flex w-1/2 bg-blue-900  items-center justify-center overflow-hidden">
        <img
          src="../../src/assets/images/login.jpg"
          alt="Legal illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginForm;
