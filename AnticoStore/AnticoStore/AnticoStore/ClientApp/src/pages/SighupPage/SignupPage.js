import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const user = {
      Name: name,
      Surname: lastname,
      Email: email,
      UserName: email, // You can adjust this as needed
      Password: password,
    };

    try {
      const response = await fetch("https://localhost:44343/User/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        
        navigate("/login");
      } else {
        
        console.error("Registration failed:", result.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      <div>
        <div className="boxsignup">
          <Link to="/login">Login</Link>
          <form onSubmit={handleSubmit}>
            <button>Kontynuj przez Facebooka</button>
            <button>Kontynuj przez konto Google</button>

            <label>Imie</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <br />
            <label>Nazwisko</label>
            <br />
            <input
              className="input"
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              name="lastname"
            />
            <br />
            <label>Email</label>
            <br />
            <input
              className="input"
              type="email"
              placeholder="sijeesh@gmail.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Telefon</label>
            <br />
            <input
              className="input"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
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
            />
            <br />
            <br />
            <button type="submit">Zarejestruj się</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupPage;