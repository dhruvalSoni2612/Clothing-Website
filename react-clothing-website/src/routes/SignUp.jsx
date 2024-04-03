import React, { useState } from "react";
import styles from "../components/SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        if (result.status === 200) {
          alert("Registration Successful!");
          navigate("/login");
        } else {
          alert("Try again");
        }
      })
      .catch((err) => console.log(err));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.signUpForm}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p className={styles.loginText}>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
