import React from 'react'
export default function Login(){
    return(
        <div className="login-page">
            <h1>Login</h1>
            <form>
                <label>Email :</label>
                <input type="email" />
                <label>Password :</label>
                <input type="password" />
                <button type="submit">Login</button>
            </form>
            <p><a href="/signup">Don't have an account? Sign up</a></p>
        </div>
    )
}