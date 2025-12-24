import React from "react";

const TaskNumber = ({loggedInUserdata}) => {
  return (
    <div className="flex flex-wrap mt-7 bg-[#1c1c1c] px-4  py-2 justify-between border gap-5 screen">
      <div className="rounded-xl py-5 px-10 w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">{loggedInUserdata.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl py-5 px-10 w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">{loggedInUserdata.completeTask}</h2>
        <h3 className="text-xl font-medium"> completed Task</h3>
      </div>
      <div className="rounded-xl py-5 px-10 w-[45%] bg-yellow-400">
        <h2 className="text-3xl font-semibold">{loggedInUserdata.AcceptTask}</h2>
        <h3 className="text-xl font-medium"> Accept Task</h3>
      </div>
      <div className="rounded-xl py-5 px-10 w-[45%] bg-red-500">
        <h2 className="text-3xl font-semibold">{loggedInUserdata.FailedTask}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
