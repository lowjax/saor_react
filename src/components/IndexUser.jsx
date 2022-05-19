import React from "react";
import NavbarUser from "./NavbarUser";
import BodyDiagram from "../img/BodyDiagram.svg";
import { useFormik } from "formik";
import SelectionUser from "./SelectionUser";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";




// import Climbing from "../img/Climbing.svg"
// import Skateboard from "../img/Skateboard.svg"
// import Surf from "../img/Surf.svg"
// import { Link } from "react-router-dom";
// import ContentListUser from "./ContentListUser";


export default function IndexUser() {
  const [openModal, setOpenModal] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bodyPart,setBodyPart] = useState("")

  let formik = useFormik({
    initialValues: {
      bodyPart: "",
    },
    // validationSchema: validateFields,
    // onSubmit: (values) => {
    //   alert("form submitted");
    // },
  });

  function bodySelect() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      // method: 'GET',
      // headers: myHeaders,
      // body: urlencoded,
      // redirect: 'follow'
      credentials: "include",
    };
    fetch("http://localhost:1235/api/body", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          // console.log(bodyPart);

          alert("Success! have selected a body part.");
          setOpenModal(true)
          setBodyPart(response)
          console.log(bodyPart)
          // window.location.href = "SelectionUser";
          return;
        }
      })
      .then((data) => {
        JSON.response
      })
      .catch((e) => {
        console.log(response);
        console.log(e);
        alert("Sorry, something isn't right");
        //return;
      })
      .finally(() => {
        setLoading((true));
        
      });
    }
    //
    useEffect(() => {
  
     
        
    } , [])
  

   
  

  console.log(formik.values.bodyPart)
  return (
    <>
    {!openModal &&
      <div>
      <NavbarUser />
      {loading && <Spinner animation="border" />}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div id="bodyDigramContainer">
        <img id="bodyDiagram" src={BodyDiagram} height={40} />
      </div>
      <div id="bodDiagramText">
        <h1>Select area of injury</h1>
      </div>
      <form className="form-inline">
      <select className="form-control"
        name="bodyPart"
        onChange={formik.handleChange}
        value={formik.values.bodyPart}
        onBlur={formik.handleBlur}
      >
        <option value="Right Ankle">right ankle </option>
        <option value="Left Ankle">left ankle</option>
        <option value="Head">head</option>
      </select>
      </form>
      <br />
      <div id="selectionContainer">
      <button type="button" className="btn btn-primary" id="fixMeButton"  onClick={bodySelect}>Logout</button>
      </div>
      <br />
      <br />
      <br />

    </div>
}
{ openModal &&
<SelectionUser />
}    </>
  );
}



