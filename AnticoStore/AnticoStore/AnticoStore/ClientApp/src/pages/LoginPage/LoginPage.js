import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("https://localhost:44343/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email, Password }),
      });

      // Handle the response...
      const result = await response.json();
      console.log(result);

      // Additional logic based on the response
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
          <Link to="/signup">Signup</Link>
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
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;