import React, { useState } from "react";
import "./AdminDash.css";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = (props) => {
  console.log(props.loggedInUserdata)
  console.log("THIS IS ADMIN DASHBOARD AND .......")
  
  return (
    <>
      <h1 className="text-3xl mt-3 text-center font-bold">Admin Panel</h1>
      <div className="h-screen w-full p-7">
        <Header changeUser={props.changeUser} loggedInUserdata={props.loggedInUserdata}/>

        <CreateTask loggedInUserdata={props.loggedInUserdata}/>

        <AllTask loggedInUserdata={props.loggedInUserdata}/>
      </div>
    </>
  );
};

export default AdminDashboard;
