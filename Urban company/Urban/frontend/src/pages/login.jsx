// Login.jsx
import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken(true);
      localStorage.setItem('token',token)
      console.log("Firebase ID Token:", token);  // Log the ID token to the console
      navigate('/')
  } catch (err) {
      console.log(err)
  }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2><b>Login</b></h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >Login</button>
        <p className="p">If you don't have account 
          <Link className="Link" to={"/createaccount"}>  Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
