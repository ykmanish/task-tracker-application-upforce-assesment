'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Input from "@/components/resuables/Input";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

const Page = () => {
  const router = useRouter(); // Initialize router
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Check if token exists in cookies on component mount
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/sign-up"); // Redirect to homepage if token exists
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send login data to backend API
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
  email: formData.email,
  password: formData.password,
});


        // If login is successful, store token in a cookie and redirect
        Cookies.set("token", res.data.token, { expires: 7 }); // Set token in cookie for 7 days
        setMessage("Login successful! Redirecting...");
        const user  = res.data?.user;
        localStorage.setItem("user", JSON.stringify(user));
        if (user) {
          router.push("/"); 
        }
      } catch (error) {
        // Handle errors from backend
        setMessage(error.response?.data?.message || "Invalid credentials");
      }
    }
  };

  const backgroundImage = {
    backgroundImage: `url("https://assets.lummi.ai/assets/QmaH51PrpNcTcy24spHhMxD82bVF7X9mEK5bq7DfMrwM7S?auto=format&w=1500")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={backgroundImage}>
      <div className="flex justify-center items-center h-screen">
        <div className="p-10 flex flex-col justify-center items-center w-full h-full">
          <div className="lg:p-10 p-6 flex lg:w-[35svw] flex-col justify-center rounded-[35px] bg-white">
            <h1 className="small font-semibold text-[#0c0c0c] mb-4 text-center text-2xl">
              Sign in
            </h1>
            <form onSubmit={handleSubmit}>
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 small ml-2 text-sm mt-1">
                  {errors.email}
                </p>
              )}

              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 small ml-2 text-sm mt-1">
                  {errors.password}
                </p>
              )}

              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  className="w-full btn hover:bg-[#212121] heading text-lg mt-10 flex items-center justify-center h-16 px-4 font-semibold text-center text-white rounded-xl bg-[#0c0c0c] transition-all duration-500"
                >
                  Sign in
                </button>
                {message && (
                  <p className="mt-4 text-center text-[16px] text-zinc-600">{message}</p>
                )}
                <p className="mt-4 small flex items-center text-[16px] text-zinc-600">
                  Don't have an account?
                  <Link href="/sign-up">
                    <span className="text-[#0c0c0c] ml-1 font-semibold">Sign up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
