import React from "react";

import LoginDiv from "../components/LoginDiv";

const Login = () => {
  return (
    <>
      <div className="flex bg-white h-200">
        <div className="hidden md:block md:w-1/4 bg-yellow-200">
          <div className="flex w-full justify-center items-center bg-gray-400 py-1">
             <button> drop.down.here</button>
          </div>
        </div>

        <div className="w-full md:w-2/4 bg-red-400">
          <div className="w-full flex justify-center items-center bg-orange-300 py-1"> 
            <p><strong>Chat.name.here</strong></p>
          </div>
          <div className="w-full flex ">
              message.boxhere

          </div>
        </div>

        <div className="hidden md:block w-1/4 bg-green-400">

          <div className="flex bh-yellow-200 ">

            <div className="w-4/5 lg:w-2/3 ">
              <div className="flex">
                <div className="flex lg:w-2/5 items-center justify-center bg-white m-3 aspect-square rounded-xl border-dashed border-3">
                  img.here
                </div>
                <div className="mt-auto mb-3">
                  <p>status.w.you</p>
                </div>
              </div>              
            </div>

            <div className="w-1/5 lg:w-1/3 ">
              <div className="flex  flex-col  my-3 mr-3 ">
                <div className="flex justify-end mb-1 ">
                  <button className=" rounded p-2 bg-white ">settings.svg</button>
                </div>

              </div>
            </div>

          </div>

          <div className="px-3 pb-3">
            <div className="flex flex-col bg-purple-300">
              <p className="text-2xl pb-1">u.name</p>
              <p className="h-24 px-1"> about me... </p>
              <div className="flex">
                <button className="w-1/2 text-black bg-white hover:bg-blue-200 rounded mr-2 mb-2 text-xl py-1">Emoji</button>
                <button className="w-1/2 text-black bg-white hover:bg-blue-200 rounded ml-2 mb-2 text-xl py-1">GIF</button>
              </div>
              <div className=" bg-white w-full p-3 rounded-lg  h-24 border-dashed border-3">
                gif.emoji.menu.here
              </div>
              <div className=" bg-white w-full p-3 rounded-lg mt-2 h-12 border-dashed border-3">
                common.emoji.here
              </div>

              <div className="flex justify-center items-center bg-white w-full p-3 rounded-lg mt-2 h-24 border-dashed border-3">
                <div>svg.svg </div>
                <div className="text-xl font-bold">Attach a File</div>
              </div>

              
            </div>            
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
