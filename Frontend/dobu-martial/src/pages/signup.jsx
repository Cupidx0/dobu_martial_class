import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signUpWithAssistant } from "../Utils/Assistant";
import { useAuth } from "./Authcontext";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handle_user_signup =async(e)=>{
        e.preventDefault();
        setError("");
        if (!username || !email || !password || !confirmPassword) {
            setError("All fields are required");
            toast.error("All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            toast.error("Passwords do not match");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format");
            toast.error("Invalid email format");
            return;
        }
        try {
            const response = await signUpWithAssistant({
                username: username,
                email: email,
                password: password,
            });
            setUser(response.user);
            navigate("/account");
            toast.success("Registration successful!");
        } catch (error) {
            const msg = error.message;
            setError(msg);
            toast.error("Registration failed: " + msg);
        }
    }
    return(
        <div className="signup-page">
            <h1>Sign Up</h1>
            <form onSubmit={handle_user_signup} className="flex flex-col items-center gap-2">
                <label>Name :</label>
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <label>Email :</label>
                <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password :</label>
                <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password :</label>
                <input type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            {error && <p>{error}</p>}
        </div>
    )
}
