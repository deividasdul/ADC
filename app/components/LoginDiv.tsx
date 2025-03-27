"use client";

import React from "react";
import { useState } from "react";
import LoginUsingApps from "./LoginUsingApps";

type LoginDivProps = {
  loadLoginPage: boolean;
};

const LoginDiv: React.FC<LoginDivProps> = ({ loadLoginPage }) => {
  {
    /*  //xddddddddddddddddddddddddd
  const handleRegisterFormLoadClick = () => {
    const leftForm = document.getElementById("LeftForm");
    const leftHelp = document.getElementById("LeftHelp");
    const rightForm = document.getElementById("RightForm");
    const rightHelp = document.getElementById("RightHelp");
    if (leftForm && leftHelp && rightForm && rightHelp){

      //rightHelp.classList.add("opacity-0");
      
      rightHelp.classList.add("hidden");
      leftForm.classList.add("hidden");
      rightForm.classList.remove("hidden");
      leftHelp.classList.remove("hidden");
    }
  };
  const handleLoginFormLoadClick = () => {
    const leftForm = document.getElementById("LeftForm");
    const leftHelp = document.getElementById("LeftHelp");
    const rightForm = document.getElementById("RightForm");
    const rightHelp = document.getElementById("RightHelp");
    if (leftForm && leftHelp && rightForm && rightHelp){
      rightForm.classList.add("hidden");
      rightHelp.classList.remove("hidden");
      leftForm.classList.remove("hidden");
      leftHelp.classList.add("hidden");
    }
  };
  */
  }

  const [isLoginVisible, setIsLoginVisible] = useState(loadLoginPage); // if false loads register first
  const handleLoginFormLoadClick = () => {
    setIsLoginVisible(false);
  };
  const handleRegisterFormLoadClick = () => {
    setIsLoginVisible(true);
  };

  return (
    <div className="flex opacity-100 transition-opacity duration-300 ease-in-out text-black pt-4 sm:pt-[20vh] justify-center items-center drop-shadow-2xl">
      <div className="sm:flex w-full lg:w-2/3 xl:w-1/2 py-1 px-1 pr-2 rounded">
        {/* Left Side */}
        <div className="w-full rounded-t sm:rounded-none sm:rounded-l md:w-1/2 bg-red-300 p-1">
          <div id="LeftForm" className={isLoginVisible ? "" : "hidden"}>
            <form
              className="flex p-2 pt-4 sm:pt-8 pb-4 sm:pb-8 flex-col"
              action=""
            >
              <label htmlFor="name">Name</label>
              <input
                className="bg-white rounded px-1 mb-4 py-2"
                type="text"
                name="name"
                defaultValue=""
              />
              <label htmlFor="password">Password</label>
              <input
                className="bg-white rounded px-1 mb-4 py-2"
                type="password"
                name="password"
              />
              <div className="flex">
                <input
                  className="bg-white rounded mt-1 mb-4"
                  name="stayLoggedIn"
                  type="checkbox"
                  value="Stay Logged in"
                />
                <label className="pl-2" htmlFor="stayLoggedIn">
                  Stay Logged in
                </label>
              </div>
              <button
                type="submit"
                className="bg-white mt-2 sm:mt-8 p-1 py-3 rounded hover:bg-red-100"
              >
                Login
              </button>
            </form>
          </div>

          <div id="LeftHelp" className={isLoginVisible ? "hidden" : ""}>
            <div
              id="CreateAccount"
              className="flex flex-col w-full items-center"
            >
              <LoginUsingApps />
              <p className="font-bold p-2 text-xl">Already Have an Account?</p>
              <button
                id="CreateAccountButton"
                className="w-50 font-lg px-4 py-2 mt-2 mb-2 sm:mb-8 bg-blue-200 rounded-lg hover:bg-blue-300"
                onClick={handleRegisterFormLoadClick}
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full rounded-b sm:rounded-none sm:rounded-r md:w-1/2 bg-blue-300 p-1">
          <div id="RightForm" className={isLoginVisible ? "hidden" : ""}>
            <form
              className="flex p-2 pt-4 sm:pt-8 pb-4 sm:pb-8 flex-col"
              action=""
            >
              <label htmlFor="name">Name</label>
              <input
                className="bg-white rounded px-1 mb-4 py-2"
                type="text"
                name="name"
                defaultValue=""
              />
              <label htmlFor="email">Email (Optional)</label>
              <input
                className="bg-white rounded px-1 mb-4 py-2"
                type="text"
                name="email"
                defaultValue=""
              />
              <label htmlFor="password">Password</label>
              <input
                className="bg-white rounded px-1 mb-4 py-2"
                type="password"
                name="password"
              />
              <label htmlFor="passwordRepeat">Repeat Password</label>
              <input
                className="bg-white rounded px-1 mb-4 py-2"
                type="password"
                name="passwordRepeat"
              />
              <button
                type="submit"
                className="bg-white mt-2 sm:mt-8 p-1 py-3 rounded hover:bg-blue-100"
              >
                Register
              </button>
            </form>
          </div>

          <div id="RightHelp" className={isLoginVisible ? "" : "hidden"}>
            <div className="flex flex-col w-full items-center">
              <LoginUsingApps />
              <p className="font-bold p-2 text-xl">
                Don&apos;t Have an Account?
              </p>
              <button
                id="CreateAccountButton"
                className="w-50 font-lg px-4 py-2 mt-2 mb-2 sm:mb-8 bg-red-200 rounded-lg hover:bg-red-300"
                onClick={handleLoginFormLoadClick}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDiv;
