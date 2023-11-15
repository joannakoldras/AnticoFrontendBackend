import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import "./SignupPage.css";

function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  let [name, setName] = useState("");
  let [lastname, setLastName] = useState("");
  let [phone, setPhone] = useState("");

  
  return (<>
    {loading}
    <div>
      <div className="boxsignup">
      <Link to="/login">Login</Link>
        <form onSubmit>
        <button>Kontynuj przez Facebooka</button>
        <button>Kontynuj przez konto Google</button>

         <label>Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />

        <label>Last Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            lastname="lastname"
          />

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
           <label>Phone</label>
          <br />
          <input
            className="input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label>Password</label>
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
          <button>Zarejestruj się</button>
        </form>
      </div> 
    </div>
    </>
  );}


export default LoginPage;