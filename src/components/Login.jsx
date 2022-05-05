import React from "react";
import SoarLogo from "../img/SoarLogo.svg"
import IndexUser from "./IndexUser";
import { Link } from "react-router-dom";
import IndexAdmin from "./IndexAdmin"
import CreateAccountUser from "./CreateAccountUser";
import CreateAccountAdmin from "./CreateAccountAdmin";

export default function Login() {
  return (
    <div>
      <section className="login-clean">
        <form method="post">
          <h2 className="visually-hidden">Login Form</h2>
          <img src={SoarLogo}  heigh={40}/>
          <div className="illustration"></div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          
            <Link
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
          {/* <a className="forgot">Forgot your email or password?</a> */}
        </form>
      </section>
      <script src="../assets/bootstrap/js/bootstrap.min.js"></script>
    </div>
  );
}
