import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

//Create context Api
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState([]);

  //Direct destructuring with function call to get the local Storage data  for side rendering we will use useEffect hook
  useEffect(() => {
    //to call the localStorage function
    setLocalStorage()
    const {employees, admin} = getLocalStorage( 'admin', 'employees');
    setUserData([employees, admin]);
  },[]);


  console.log("All the Auth Data", userData)
  console.log("All the Auth Data", userData[0], userData[1])
  return (
    <div>
      {/* //Provider to provide the context Api */}
      <AuthContext.Provider value={[userData]}>{children}</AuthContext.Provider>

      
    </div>
  );
};

export default AuthProvider;
