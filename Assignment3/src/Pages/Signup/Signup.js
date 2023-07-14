
import React, { useState } from "react";
import "./Signup.css";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState(''); 
  const [name, setName] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/home");
  };
    return (
      <div>
        <Navbar/>
      <div className="container-1">
        <div className="Signin-text-container">
          <h1>Sign in</h1>
            <h2>Login to get into the world of Entertainment</h2>
            </div>
        <div className="auth-form-container">
          
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" className="signup-input" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email " className="signup-input" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" className="signup-input" name="password" />
            <button type="submit" className="singup-button">Log In</button>
        </form>
        <button className="link-btn">Already have an account? Login here.</button>
    </div>
    </div>
    </div>
    )
}
export default Signup;