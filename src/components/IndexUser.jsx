import React from "react";
import NavbarUser from "./NavbarUser";
import BodyDiagram from "../img/BodyDiagram.svg";

export default function IndexUser() {
  return (
    <div>
      <NavbarUser />
      <div id="bodyDigramContainer">
        <a href="selection.html">
          <img id="bodyDiagram" src={BodyDiagram} height={40} />
        </a>
      </div>
      <div id="bodDiagramText">
        <h1>Select area of injury</h1>
      </div>
    </div>
  );
}
