import { useState,} from "react";

const Login = ({handleLogin}) => {

  
  //This is for input functionality
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //this is form submition.
  const submitHandler = (e) => {
    e.preventDefault();
    
    //This is for login used as props
    handleLogin(email, password);
    console.log("Form Submitted");

    //To empty the both input after form submitting
    setEmail("");
    setPassword("");  
  };

  return (
    <div className="mt-20 flex justify-center items-center w-screen py-2 px-4">
      <div className="border-2 border-red-600  p-5 bg-[#1c1c1c] rounded-2xl">
        <h1 className="text-lg font-bold">Login</h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-10 items-center mt-10 h-80"
        >
          <input
          value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your mail"
            name="mail"
            id="mail"
            required
            className="text-black outline-none placeholder:text-gray text-base w-80 px-4 py-1 rounded-full border-2 border-red-300"
          ></input>

          <input
          value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            required
            className="text-black outline-none placeholder:text-gray text-base w-80 px-4 py-1 rounded-full border-2 border-red-300"
          ></input>

          <div className="flex flex-row gap-20 w-80 mt-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="checkbox"
                className="border-2 border-red-600"
              ></input>
              <label htmlFor="checkbox">Remeber me!</label>
            </div>

            <a href="#" className="text-red-300">
              Forget Password
            </a>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-red-300 w-80 h-10 text-lg font-bold hover:bg-red-200 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
