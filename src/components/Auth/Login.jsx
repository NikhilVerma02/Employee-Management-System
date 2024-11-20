import React, { useState } from "react";

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="border-2 rounded-full border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-grey-400 mb-5"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="border-2 rounded-full border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-grey-400 mb-5"
          />
          <button className="border-none rounded-full bg-emerald-600 py-3 px-5 text-xl outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
