import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";


const TaskList = ({ loggedInUserdata }) => {
  console.log(loggedInUserdata)
  return (
    <div
      id="tasklist"
      className=" overflow-x-auto py-2 px-4 mt-6 bg-[#1c1c1c] flex justify-start items-center gap-5 flex-nowrap w-full "
    >
     
     {loggedInUserdata.tasks.map((elem, idx) => {
      if(elem.active){
         return <AcceptTask key={idx} data={elem} />
      }
      if(elem.newTask){
        return <NewTask key={idx} data={elem} />
      }
     
      if(elem.completed){
        return <CompleteTask key={idx} data={elem} />
      }
      if(elem.failed){
        return <FailedTask key={idx} data={elem} />
      }
     })}
    </div>
  );
};


<newTask />
export default TaskList;
