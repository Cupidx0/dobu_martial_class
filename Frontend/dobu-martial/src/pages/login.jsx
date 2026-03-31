import React,{useState} from "react";
import {auth} from "../Utils/Firebase"
import { signInWithEmailAndPassword} from "firebase/auth";
import { db } from '../Utils/Firebase';  
import { collection,addDoc } from "firebase/firestore";
import { Link , useNavigate} from "react-router-dom";
import {toast} from 'react-hot-toast';
export default function Login(){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
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
            const userCredential = await signInWithEmailAndPassword(auth, Email, Password);
            const user = userCredential.user;
            await addDoc(collection(db, "logins"), {
                email: Email,
                timestamp: new Date()
            });
            console.log('Logged in:', user);
            navigate("/Homepage");
            toast.success("Login successful!");
            setEmail("");
            setPassword("");
        } catch (error) {
            let msg =error.message.replace("Firebase: ","").replace("(auth/","").replace(").","");
            setError(msg);
            console.error("Registration error:", msg);
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