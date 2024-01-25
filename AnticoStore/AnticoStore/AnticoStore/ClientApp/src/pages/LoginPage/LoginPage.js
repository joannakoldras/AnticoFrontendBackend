import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("https://localhost:44343/User/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const result = await response.json();
      console.log(result);
  
      if (result.success) {
        // Redirect to "/account" upon successful login
        navigate("/");
      } else {
        // Additional logic based on the response
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      <div className="login-container">
        <div className="boxlogin">
          <Link to="/Register">Signup</Link>
          <form onSubmit={handleSubmit} method="post">
            <button>Kontynuj przez Facebooka</button>
            <button>Kontynuj przez konto Google</button>

            <label>Email</label>
            <br />
            <input
              className="input"
              type="email"
              placeholder="sijeesh@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
            <br />
            <label>Hasło</label>
            <br />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <br />
            <br />
            <button className="login-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;