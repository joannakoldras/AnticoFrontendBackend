import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
 

  

  return (<>
    {loading}
    <div className="login-container" >
      <div className="boxlogin">
      <Link to="/signup">Signup</Link>
        <form onSubmit>
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
          <button>Login</button>
        </form>
      </div> 
    </div>
    </>
  );}


export default LoginPage;