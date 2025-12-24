import React, { useState } from "react";
import Header from "../Other/Header";
import TaskNumber from "../Other/TaskNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = (props) => {

  console.log("THIS IS EMPLOYEES DASHBOARD AND .......")
  return (
    <div>
      <h1 className="text-3xl mt-3 text-center font-bold">Employee Panel</h1>
      <div className="p-7 h-screen w-full">
        <Header changeUser={props.changeUser} loggedInUserdata={props.loggedInUserdata} />
        <TaskNumber loggedInUserdata={props.loggedInUserdata}/>
        <TaskList loggedInUserdata={props.loggedInUserdata}/>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
