import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (!authResult?.code) {
        throw new Error("No authorization code present");
      }

      console.log("Sending auth code:", authResult.code);
      const response = await axios.get(
        `http://localhost:5003/api/auth/google?code=${authResult.code}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Enable cookie handling
        }
      );

      const { user } = response.data;
      console.log("Login successful:", user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Login error:",
        error.response?.data?.message || error.message
      );

    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.error("Login Failed:", error),
    flow: "auth-code",
    popup: true,
    ux_mode: "popup",
    scope: "email profile",
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">Sign in to continue</p>
        </div>

        <button
          onClick={googleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 py-3 px-4 rounded-lg border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
