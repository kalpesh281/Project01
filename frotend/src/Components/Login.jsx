import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const authCode = authResult["code"];
        // Here you should send this auth code to your backend
        // Example:
        // await axios.post('/api/auth/google', { code: authCode });
        console.log("Authorization code:", authCode);
      } else {
        throw new Error("No authorization code present");
      }
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  };
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
    popup: true,
    ux_mode: "popup",
    scope: "email profile",
  });

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={googleLogin}>Login with Google</button>
    </>
  );
}

export default Login;
