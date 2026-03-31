import React,{useState} from "react";
import {auth} from "../Utils/Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../Utils/Firebase';  
import { doc, setDoc } from "firebase/firestore";
import { Link , useNavigate} from "react-router-dom";
import {toast} from 'react-hot-toast';
export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                createdAt: new Date()
            });
            console.log("Registered user:", userCredential.user.email);
            navigate("/Homepage");
            toast.success("Registration successful!");
        } catch (error) {
            let msg =error.message.replace("Firebase: ","").replace("(auth/","").replace(").","");
            setError(msg);
            console.error("Registration error:", error);
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
