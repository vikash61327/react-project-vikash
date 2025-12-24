import React, { useState } from "react";
import './createTask.css'
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

const CreateTask = () => {

  //Context hook for context api
   const [userData, setUserData] = useContext(AuthContext);


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("")


  //It is for task form submitting to employee
  const [newTask, setNewTask] = useState([]);

  //form submiting
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Admin Assigning the Task");
    console.log(title, description,assign, category, date)

//this is for admin form for assigning a task
    setNewTask({title, description,assign, category, date, active:false, completed: false, newTask: true, failed: false})

    //employee data from local Storage by context api
    const data = userData;
    console.log("USerData",  data)

    userData.forEach(element => {
      console.log(element.name)

      //This is for to assign wrok existing employee or not
      if(assign == element.name){
        console.log("Tasks",element.tasks)
        element.tasks.push(newTask);
        console.log(element)
        element.taskCount.newTask =  element.taskCount.newTask + 1;
      }
    });

    //To set the data 
    setUserData(data);
    console.log("data", data)
    
    // setTitle("");
    // setDescription("");
    // setAssign("");
    // setCategory("");
    // setDate("")


  };

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-1 rounded">
      <h3 className="font-medium text-3xl">Create Task</h3>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex w-full justify-between items-start form-data"
        >
          

          <div className="w-1/2">
            <div className="input-dt">
              <label htmlFor="title">Task Title</label>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="Make a UI design"
                name="title"
                id="title"
                
                className="text-white bg-transparent text-sm px-2 py-1 w-4/5 rounded outline-none border-[1px] border-gray-400"
              ></input>
            </div>
            <div className="input-dt">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                // placeholder="00-00-0000"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value)
                }}
                
                className="text-white bg-transparent text-sm px-2 py-1 w-4/5 rounded outline-none border-[1px] border-gray-400"
              ></input>
            </div>
            <div className="input-dt">
              <label htmlFor="assign">Assign To</label>
              <input
                value={assign}
                onChange={(e) => {
                  setAssign(e.target.value);
                }}
                type="text"
                id="assign"
                name="assign"
                placeholder="employee name"
                
                className="text-white bg-transparent text-sm px-2 py-1 w-4/5 rounded outline-none border-[1px] border-gray-400"
              ></input>
            </div>

            <div className="input-dt">
              <label htmlFor="category">Category</label>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                id="category"
                name="category"
                placeholder="design, dev, etc"
                
                className="text-white bg-transparent text-sm px-2 py-1 w-4/5 rounded outline-none border-[1px] border-gray-400"
              ></input>
            </div>
          </div>

          <div className="input-dt w-2/5 flex flex-col items-start">
            <label htmlFor="description">Task Description</label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              type="text"
              placeholder="Enter the Description"
              
              className="text-gray-300 h-44 outline-none  text-base w-full rounded py-2 px-4 border-[1px] border-gray-400"
              cols="30"
              rows="10"
            ></textarea>

            <button
              type="submit"
              className="rounded-lg bg-emerald-500 hover:bg-emerald-600 w-full py-2 px-5 text-sm mt-4 font-bold cursor-pointer"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
