import { log } from "console";
import React from "react";
import LoginUsingApps from "../components/LoginUsingApps";

const LoginDiv = () => {

    
  /*


  const LoginAccountButton = document.getElementById("LoginAccountButton");

  if (LoginAccountButton){
    console.log ("nice");
  }
  else{
    console.log ("Error LoginAccountButton NOT FOUND");
  }
  */ 
  return (
    <>
    <div class="flex  text-black pt-4 sm:pt-[20vh]  justify-center items-center drop-shadow-2xl">
      <div class=" sm:flex w-full lg:w-2/3 xl:w-1/2 py-1 px-1 pr-2 rounded">

        <div id="loginLeft" class="w-full rounded-t sm:rounded-none sm:rounded-l md:w-1/2 bg-red-300 p-1">

          <div id="LeftForm">
            <form class="flex p-2 pt-4 sm:pt-8 pb-4 sm:pb-8 flex-col" action="">
              <label htmlFor="name">Name</label>
              <input class="bg-white rounded px-1 mb-4 py-2 " type="text" name="name" value=""/>
              <label htmlFor="password">password</label>
              <input class="bg-white rounded px-1 mb-4 py-2 " type="text" name="password" />
              <div class="flex">
                <input class="bg-white rounded mt-1 mb-4 " name="stayLoggedIn" type="checkbox" value="Stay Logged in"/>
                <label class="pl-2" htmlFor="stayLoggedIn"> Stay Logged in</label>                
              </div>
              <button type="submit" class="bg-white p-1 py-3 rounded hover:bg-red-100">Login</button>
            </form>

          </div>

          <div id="LeftHelp" class="hidden">
            <div id="CreateAccount" class="flex  flex-col w-full items-center">
              <LoginUsingApps/>
              <p class="font-bold p-2 text-xl">Already Have an Account?</p>
              <button id="CreateAccountButton" class="w-50 font-lg px-4 py-2 mt-2 mb-2 sm:mb-8 bg-blue-200 rounded-lg hover:bg-blue-300">
                Login
              </button>
            </div>
          </div>

        </div>

        <div id="loginRight" class="w-full rounded-b sm:rounded-none sm:rounded-r md:w-1/2 bg-blue-300 p-1">

          <div id="RightForm" class="hidden"> 
            FORM HERE !!!!
          </div>

          <div id="RightHelp" class="flex  flex-col w-full items-center">
            <LoginUsingApps/>
            <p class="font-bold p-2 text-xl">Don't Have an Account?</p>
            <button id="CreateAccountButton" class="w-50 font-lg px-4 py-2 mt-2 mb-2 sm:mb-8 bg-red-200 rounded-lg hover:bg-red-300">
              Register
            </button>
          </div>
        </div>
        
      </div>
    </div>

    </>
  );
};

export default LoginDiv;
