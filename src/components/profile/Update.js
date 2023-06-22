import React from "react";
import "./update.css";
import { useNavigate } from "react-router-dom";
import { dat } from "./Profilecard";
import axios from "axios";


export default function Updatecard(){
    const navigate = useNavigate();
    const updatedata = dat;
    const updateApi=(id)=>{
      axios.put(`https://648be6e48620b8bae7ebe696.mockapi.io/data/${id}`,{
        fullName: document.getElementById('name-input').value,
        jobTitle: document.getElementById('job-input').value,
        email: document.getElementById('email-input').value,
      }).then(()=>navigate("/"));
    }
    const updateValidate=(id)=>{
      var name= document.getElementById('name-input').value;
      var job= document.getElementById('job-input').value;
      var email= document.getElementById('email-input').value;

      let regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
      if(name.length>0 && job.length>0){
        if (email.match(regex)){
          updateApi(id)
        }
        else{
          alert('enter valid email')
        }

      }else{
        alert('enter valid name job title')
      }
    }
  return (
    <div className="update-container">
      <div className="update-container-content">
        <h2 className="heading-update-page">Employee Details Update</h2>
        <div className="update-container-row">
          < p className="update-label">Name</ p>
          <input type="text" className="update-input" id="name-input" placeholder="Enter Your Full Name..." defaultValue={updatedata.fullName}></input>
          <p className="error-msg" id="name-error"></p>
        </div>
        <div className="update-container-row">
          < p className="update-label">Job Title</ p>
          <input type="text" className="update-input" id="job-input" placeholder="Enter Your Designation..." defaultValue={updatedata.jobTitle}></input>
          <p className="error-msg" id="job-error"></p>
        </div>
        <div className="update-container-row">
          < p className="update-label">Email</ p>
          <input type="text" className="update-input" id="email-input" placeholder="Enter Your Email..." defaultValue={updatedata.email} ></input>
          <p className="error-msg" id="email-error"></p>
        </div>
        <div className="update-container-row">
          <button className="update-button" onClick={()=>{updateValidate(updatedata.id)}}>Update</button>
          <button className="cancel-button" onClick={()=>navigate("/")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

 
