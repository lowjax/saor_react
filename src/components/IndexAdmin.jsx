import React from "react";
import NavbarAdmin from "./NavbarAdmin";
import BodyDiagram from "../img/BodyDiagram.svg";

export default function IndexAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <div id="bodyDigramContainer">

          <img id="bodyDiagram" src={BodyDiagram} height={40} />

      </div>
      <div id="bodDiagramText">
        <h1>Select area of injury</h1>
      </div>
    </div>
  );
}
