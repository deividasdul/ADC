"use client";

import React from "react";

const ComsRigthMenu = () => {
  
  const returnCenterMenuFromRight = () => {
    const rightMenu = document.getElementById("rightMenu");
    const centerMenu = document.getElementById("centerMenu");
    if (rightMenu) {
      rightMenu.classList.toggle("hidden");
      console.log("right menu found");
    }
    if (centerMenu){
      centerMenu.classList.toggle("hidden");
      console.log("center menu found");
    }
  };

  return (
    <div id="rightMenu" className="hidden md:block w-1/1 md:w-1/4 ">

      <div className="md:hidden flex w-full justify-start p-1">
          <button onClick={returnCenterMenuFromRight} className=" bg-white text-black rounded p-1 "> back.svg</button>
      </div>

      <div className="flex  ">

        <div className="w-4/5 lg:w-2/3 ">
          <div className="flex">
            <div className="flex lg:w-2/5 items-center justify-center bg-gray-800 m-3 aspect-square rounded-xl text-white border-white border-dashed border-3">
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
              <button className=" rounded p-2 bg-white text-black ">settings.svg</button>
            </div>

          </div>
        </div>

      </div>

      <div className="px-3 pb-3">
        <div className="flex flex-col">
          <p className="text-2xl pb-1">u.name</p>
          <p className="h-24 px-1"> about me... </p>
          <div className="flex">
            <button className="w-1/2 text-black bg-white hover:bg-blue-400 rounded mr-2 mb-2 text-xl py-1">Emoji</button>
            <button className="w-1/2 text-black bg-white hover:bg-blue-400 rounded ml-2 mb-2 text-xl py-1">GIF</button>
          </div>
          <div className=" bg-gray-800 w-full p-3 rounded-lg h-24 border-dashed border-3">
            gif.emoji.menu.here
          </div>
          <div className=" bg-gray-800 w-full p-3 rounded-lg mt-2 h-12 border-dashed border-3">
            common.emoji.here
          </div>

          <div className="flex justify-center items-center bg-gray-800 w-full p-3 rounded-lg mt-2 h-24 border-dashed border-3">
            <div>svg.svg </div>
            <div className="text-xl font-bold">Attach a File</div>
          </div>

          
        </div>            
      </div>

    </div>

  );
};

export default ComsRigthMenu;
