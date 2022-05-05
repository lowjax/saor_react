import React from "react";
import NavbarUser from "./NavbarUser";

export default function LogoutUser() {
  return (
    <div>
      <NavbarUser />
      <div id="logoutDiv">
        <h1 id="logoutHeader">LOGOUT</h1>
        <p id="logoutParagraph">
          By clicking below you are exiting SAOR, all unsaved progressed will
          deleted. Are you sure you want to logout?
        </p>
        <a id="logOut" href="../access/login.html">
          <button className="btn btn-primary" id="logoutButton" type="button">
            LOGOUT
          </button>
        </a>
      </div>
    </div>
  );
}
