import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginWithAssistant } from "../Utils/Assistant";
import { useAuth } from "./Authcontext";

export default function Login(){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handle_user_sign_in = async(e)=>{
        e.preventDefault();
        setError("");
        if(!Email||!Password){
            setError("All fields are required");
            toast.error("All fields are required");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            setError("Invalid email format");
            toast.error("Invalid email format");
            return;
        }
        try{
            const response = await loginWithAssistant({
                email: Email,
                password: Password,
            });
            setUser(response.user);
            navigate("/account");
            toast.success("Login successful!");
            setEmail("");
            setPassword("");
        } catch (error) {
            const msg = error.message;
            setError(msg);
            setError("Login failed: " + msg);
            toast.error("Login failed: " + msg);
        };
    }
    return(
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handle_user_sign_in}>
                <label>Email :</label>
                <input type="email" 
                    value={Email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Password :</label>
                <input type="password"
                    value={Password}
                    onChange={(e)=>setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
            <p><Link to ="/signup">Don't have an account? Sign up</Link></p>
            {error&&<p>{error}</p>}
        </div>
    )
}
