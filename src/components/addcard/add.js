import React, { useState } from "react";
import "./add.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addcard = () => {
  const navigate = useNavigate();
  const [employeeName, setEmployeeName] = useState([]);
  const [employeeJobtitle, setEmployeeJobtitle] = useState([]);
  const [employeeEmailid, setEmployeeEmailid] = useState([]);
  const addEmployee = () => {
    axios
      .post("https://648be6e48620b8bae7ebe696.mockapi.io/data", {
        fullName: employeeName,
        jobTitle: employeeJobtitle,
        email: employeeEmailid,
      })
      .then(() => navigate("/"));
  };
  const addvalidate = () => {
    var name = document.getElementById("name-input").value;
    var job = document.getElementById("job-input").value;
    var email = document.getElementById("email-input").value;

    let regex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");
    if (name.length > 0 && job.length > 0) {
      if (email.match(regex)) {
        addEmployee();
      } else {
        alert("enter valid email");
      }
    } else {
      alert("enter valid name job title");
    }
  };

  return (
    <div className="add-container">
      <div className="add-container-content">
        <h2 className="heading-add-page">Add Employee Details</h2>
        <div className="add-container-row">
          <p className="add-label">Name</p>

          <input
            type="text"
            className="add-input"
            id="name-input"
            placeholder="Enter Your Full Name..."
            onChange={(e) => setEmployeeName(e.target.value)}
          ></input>
          <p className="error-msg" id="name-error"></p>
        </div>
        <div className="add-container-row">
          <p className="add-label">Job Title</p>
          <input
            type="text"
            className="add-input"
            id="job-input"
            placeholder="Enter Your Designation..."
            onChange={(e) => setEmployeeJobtitle(e.target.value)}
          ></input>
          <p className="error-msg" id="job-error"></p>
        </div>
        <div className="add-container-row">
          <p className="add-label">Email</p>
          <input
            type="text"
            className="add-input"
            id="email-input"
            placeholder="Enter Your Email..."
            onChange={(e) => setEmployeeEmailid(e.target.value)}
          ></input>

          <p className="error-msg" id="email-error"></p>
        </div>
        <div className="add-container-row">
          <button className="add-button" onClick={() => addvalidate()}>
            Add
          </button>
          <button className="cancel-button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addcard;
