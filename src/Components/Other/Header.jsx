import { useEffect, useState } from "react";

const Header = (props) => {
  console.log(props.loggedInUserdata);
  console.log('This is header')

  const [userName, setUserName] = useState("");

useEffect(()=>{
    if (!props.loggedInUserdata) {
    setUserName("Admin");
  } 
  else {
    setUserName(props.loggedInUserdata.name);
  }
}, [])

  //This is for logOut
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('');
    //To reload
    // window.location.reload();
  };
  return (
    <div>
      <div className="flex py-3 px-5 items-end justify-between border bg-blue-400">
        <h2 className="text-xl font-medium">
          Hii, <br />
          <span className="text-3xl font-semibold">{userName}</span>
        </h2>
        <button
          onClick={logOutUser}
          className="bg-red-800 font-medium text-lg text-white rounded py-1 px-2"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
