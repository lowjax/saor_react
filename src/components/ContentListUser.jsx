import React from "react";
// import NavbarUser from "./NavbarUser";
import { Link } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhysioContent from "../img/PhysioContent.jpg"
import NavbarUser from "./NavbarUser";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";


import { Content } from "../contentdata";

export default function ContentListUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      // method: 'GET',
      // headers: myHeaders,
      // body: urlencoded,
      // redirect: 'follow'
      credentials: "include",
    };
    fetch("http://localhost:1235/api/content", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log(response);

          // alert("Success! have selected sport of aquired injury.");
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
      })
      .finally(() => {
        setLoading((true));
      });
    
    //
    useEffect(() => {
  
    } , [])
  


  return (
    <div>
      <NavbarUser />
      {loading && <Spinner animation="border" />}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div id="contentContainer">
        <div className="card-group">
          {Content.map(content => (
            <div class="card">
            <div className="card-body" id="contentCard">
              <img id="physioImage" src={PhysioContent} height={40}/>
              <h4 className="card-title">{content.id}</h4>
              <p className="card-text">{content.Name}</p>
              <button
                className="btn btn-primary"
                id="favoritesButton"
                type="button"
              >
                ADD TO FAVORITES
              </button>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
