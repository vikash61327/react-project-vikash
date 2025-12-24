// import './App.css'
import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login.jsx";
import AdminDashboard from "./Components/DashBoard/AdminDashboard.jsx";
import EmployeeDashboard from "./Components/DashBoard/EmployeeDashboard.jsx";
import { AuthContext } from "./Context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  //Use the Context api by help of useContext hook
  const [userData, setUserData] = useContext(AuthContext);

  console.log("APP   UserData", userData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser"); //to check which role loggedIn
    console.log("UseEffect of loggedInUser", loggedInUser);

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      console.log("if loggedInUser", loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    // if(email === 'admin@example.com', password === 123){

    //Here Find() is a mehtod used for array to find the value
    if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else if ((email === "admin@example.com", password === 123)) {
      // if(admin)
      setUser("admin");

      setLoggedInUser(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          loggedInUserdata={loggedInUser}
        />
      ) : null}
    </>
  );
};

export default App;
