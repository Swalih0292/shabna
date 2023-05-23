import "./Admin-Loginpage.css";
import Button from "react-bootstrap/Button";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase/config";

import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const navigate = useNavigate();
  const navigateToAhome = () => {
    navigate("/adminhome");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigateToAhome();
      alert("Login successfully");
    } catch (err) {
      console.log(err);
      alert("Enter correct Email or password")
    }
  };
  console.log(auth);

  return (
    <div className="maincondainer">
      <div className="loginbox rounded-4 shadow p-3 mb-5 bg-body-tertiary rounded">
       <div className="sub-log">
       <h2 className="log">Admin Login In</h2>

<span>Email address</span>
<input
  type="email"
  className="input-box"
  name="username"
  id="getemail"
  placeholder="username"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<span>Password</span>
<input
  type="password"
  className="input-box"
  name="password"
  id="getpassword"
  placeholder="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<Button variant="primary" type="submit" onClick={login}>
  submit
</Button>
       </div>


      </div>
    </div>
  );
};
export default Login;
