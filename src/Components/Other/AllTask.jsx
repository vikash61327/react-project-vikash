import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60 ">
      <div className="bg-red-400 mb-3 py-2 px-4 font-bold flex rounded justify-between">
        <h2 className="w-1/5 px-1 text-center">Employee Name</h2>
        <h3 className="w-1/5 px-1 text-center">Active Task</h3>
        <h5 className="w-1/5 px-1 text-center">New Task</h5>
        <h5 className="w-1/5 px-1 text-center">Completed Task</h5>
        <h5 className="w-1/5 px-1 text-center">Failed Task</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData.map(function (elem, idx) {
          return (
            <div className="border-2 border-emerald-500 mb-3 py-2 px-4 flex rounded justify-between " key={idx}>
              <h2 className="w-1/5 text-pink-600 px-1 text-center"> {elem.name}</h2>
            <h2 className="w-1/5 text-yellow-400 px-1 text-center"> {elem.taskCount.active}</h2>
              <h2 className="w-1/5 text-blue-600 px-1 text-center"> {elem.taskCount.newTask}</h2>
             <h2 className="w-1/5 text-green-600 px-1 text-center"> {elem.taskCount.completed}</h2>
               <h2 className="w-1/5 text-red-600 px-1 text-center"> {elem.taskCount.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
