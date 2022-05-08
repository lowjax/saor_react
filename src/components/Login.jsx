import React from "react";
import SoarLogo from "../img/SoarLogo.svg"
import IndexUser from "./IndexUser";
import { Link } from "react-router-dom";
import IndexAdmin from "./IndexAdmin"
import CreateAccountUser from "./CreateAccountUser";
import CreateAccountAdmin from "./CreateAccountAdmin";
import { useState } from "react";

export default function Login() {
  // code funtionality for posting user login 

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Change values based on event, the event being the form input
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  }


 const loginUser = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Cookie", "connect.sid=s%3AeoWXMsnyAi_F7xK6t9SDqDADcPiah1hN.D7oNoRfUQQXXb9z3cCW0mtK5TOdoIsQHHFcv%2Bo0W9cM");
  
  // var urlencoded = new URLSearchParams();
  let please = JSON.stringify({
    email: email,
    password: password
})
let urlencoded = please
  // var urlencoded = JSON.stringify({email: email, password: password})

  // urlencoded.append("email", "password");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  
  fetch("http://localhost:1235/api/users/login", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
    .then((response) => {
      console.log(response);
      alert("Success! You are now signed in.");
      return;
  })
  .catch((e) => {
      console.log(bodyContent);
      console.log(e);
      alert("Sorry, something isn't right");
      return;
})}
  

  return (
    <div>
      <section className="login-clean">
        <form onSubmit={loginUser}>
          <h2 className="visually-hidden">Login Form</h2>
          <img src={SoarLogo}  heigh={40}/>
          <div className="illustration"></div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              value = {email}
              onChange = {onChangeEmail}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value = {password}
              onChange ={onChangePassword}
            />
          </div>
          <button type="submit"></button>
          </form>
            {/* <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="logInButton"
              as={Link}
              to="/IndexUser"
              element={IndexUser}
              data-bs-target="access/index.html"
            >
              Log In
            </Link>
          
          
            <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="createAccount"
              as={Link}
              to="/CreateAccountUser"
              element={CreateAccountUser}
              data-bs-target="access/index.html"
            >
              Create Account
            </Link>
          

         
          <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="logInButtonAD"
              as={Link}
              to="/IndexAdmin"
              element={IndexAdmin}
              data-bs-target="access/index.html"
            >
              Log In (ADMIN)
            </Link> 


            <Link
              className="btn btn-primary d-block w-100"
              role="button"
              id="createAccount"
              as={Link}
              to="/CreateAccountAdmin"
              element={CreateAccountAdmin}
              data-bs-target="access/index.html"
            >
              Create Account (ADMIN)
            </Link>

          <div className="mb-3"></div>
          <a className="forgot">Forgot your email or password?</a> */}
        {/* </form> */}
      </section>
      <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
    </div>
  );
}
