import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profilecard.css";
import { useNavigate } from "react-router-dom";
export let dat={};
const ProfileCard = () => {
  const url = "https://648be6e48620b8bae7ebe696.mockapi.io/data";
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  const updateFunc = (id)=>{
    dat= data[data.findIndex((datum)=>datum.id===id)];

  };
  const getData = () => {
    axios
      .get(`https://648be6e48620b8bae7ebe696.mockapi.io/data`)
      .then((getData) => {
        setData(getData.data);
      });
  };
  const deleteDetails = (id) => {
    axios
      .delete(`https://648be6e48620b8bae7ebe696.mockapi.io/data/${id}`)
      .then(() => {
        getData();
      });
  };
  const fetchData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    
    <div className="employee-page">
      

      <p className="heading">Employee Management</p>
      <div className="sub-heading-container">
      <p className="sub-heading">Employee List</p>
      <button className="add-employee" onClick={()=>navigate("/add")}>Add Employee</button>
      </div>
      <div className="profile-container">
        <p className="heading-for-container" id="heading-for-container1">Name</p>
        <p className="heading-for-container" id="heading-for-container2">Job Title</p>
        <p className="heading-for-container" id="heading-for-container3">Email-id</p>
        <p className="heading-for-container" id="heading-for-container4">Actions</p>
      {data.map((user) => {
        const { fullName, email, jobTitle, id } = user;
        return (
            <>
            <input type="button" className="profile-container-content" id={`fullName${id}`} value={fullName} ></input>
            <input type="button" className="profile-container-content" id={`jobTitle${id}`} value={jobTitle} ></input>
            <input type="button" className="profile-container-content" id={`email${id}`} value={email} ></input>
            <div className="action-container">
              <button className="action-buttons" id="update-button"onClick={() =>{ updateFunc(id);navigate("/update")}} > Update </button>
             
              <button className="action-buttons" id="delete-button"onClick={() => deleteDetails(id)} >Delete</button>
            </div>
            </>
        );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
