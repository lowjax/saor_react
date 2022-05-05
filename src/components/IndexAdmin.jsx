import React from "react";
import NavbarAdmin from "./NavbarAdmin";
import BodyDiagram from "../img/BodyDiagram.svg";

export default function IndexAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <div id="bodyDigramContainer">
        <a href="selectionAD.html">
          <img id="bodyDiagram" src={BodyDiagram} height={40} />
        </a>
      </div>
      <div id="bodDiagramText">
        <h1>Select area of injury</h1>
      </div>
    </div>
  );
}
