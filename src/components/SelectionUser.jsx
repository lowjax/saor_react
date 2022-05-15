import React from "react";
import NavbarUser from "./NavbarUser";
import Climbing from "../img/Climbing.svg"
import Skateboard from "../img/Skateboard.svg"
import Surf from "../img/Surf.svg"
import ContentListUser from "./ContentListUser";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";


export default function SelectionUser() {
   function filterContent() {
    

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      // method: 'GET',
      // headers: myHeaders,
      // body: urlencoded,
      // redirect: 'follow'
      credentials: "include",
    };
    fetch("http://localhost:1235/api/sport", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log(response);

          alert("Success! have selected sport of aquired injury.");
          // setOpenModal(true)
          // window.location.href = "ContentListUser";
          return;
        }
      })
      .catch((e) => {
        console.log("response");
        console.log(e);
        alert("Sorry, something isn't right");
        //return;
      });
      fetch("http://localhost:1235/api/injury", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log(response);

          alert("Success! have selected injury type.");
          // setOpenModal(true)
          window.location.href = "ContentListUser";
          return;
        }
      })
      .catch((e) => {
        console.log(bodyContent);
        console.log(e);
        alert("Sorry, something isn't right");
        //return;
      });

    
  }
  
  
  return (
    <div>
      <NavbarUser />
      <div id="carousellContainer">
        <div className="carousel slide" data-bs-ride="carousel" id="carousel-2">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100 d-block"
                src={Climbing} height={40}
                alt="Slide Image 1"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                src={Skateboard} height={40}
                alt="Slide Image 2"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                src={Surf} height ={40}
                alt="Slide Image 3"
              />
            </div>
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carousel-2"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                id="spanArrow"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-2"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                id="spanArrow"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carousel-2"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-2" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
      <div id="selectionContainer1">
        <form className="form-inline">
          <div className="form-group">
            <label>SELECT SPORT</label>
            <select className="form-control">
            <option>---</option>
              <option value="Skateboarding">Skateboarding</option>
              <option value="Snowboarding">Snowboarding</option>
              <option value="Surfing">Surfing</option>
              <option value="Climbing">Climbing</option>
              <option value="BMX">BMX</option>
            </select>
          </div>
        </form>
      </div>
      <div id="selectionContainer2">
        <form className="form-inline">
          <div className="form-group">
            <label>SELECT INJURY TYPE</label>
            <select className="form-control">
            <option>---</option>
              <option value="Sprain">SPRAIN</option>
              <option value="Break">BREAK</option>
              <option value="Tear">TEAR</option>
            </select>
          </div>
        </form>
      </div>
      <div id="selectionContainer">
        {/* <Link 
        to="/ContentListUser"
        as={Link}
        element={ContentListUser}> */}
          <button className="btn btn-primary" id="fixMeButton" type="button" onClick={filterContent}>
            FIX ME
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
