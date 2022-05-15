import React from "react";
import NavbarUser from "./NavbarUser";
import BodyDiagram from "../img/BodyDiagram.svg";
import { useFormik } from "formik";
import SelectionUser from "./SelectionUser";



// import Climbing from "../img/Climbing.svg"
// import Skateboard from "../img/Skateboard.svg"
// import Surf from "../img/Surf.svg"
// import { Link } from "react-router-dom";
// import ContentListUser from "./ContentListUser";


export default function IndexUser() {
  const [openModal, setOpenModal] = React.useState(false);

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
          console.log(response);

          alert("Success! have selected a body part.");
          setOpenModal(true)
          // window.location.href = "SelectionUser";
          return;
        }
      })
      .catch((e) => {
        console.log(bodyContent);
        console.log(e);
        alert("Sorry, something isn't right");
        //return;
      });

    // function handleSubmit(e) {
    //   e.preventDefault();
    //   console.log('You clicked submit.');

    //   fetch("http://localhost:1235/api/body", {
    //     method:"POST"
    //   }).then(response => response.json()).then(json => console.log(json))
    // }
  }

  console.log(formik.values.bodyPart)
  return (
    <>
    {!openModal &&
      <div>
      <NavbarUser />
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



