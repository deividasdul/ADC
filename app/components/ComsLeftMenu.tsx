"use client";

import React from "react";

import ComsLeftDropDown from "../components/ComsLeftDropDown";
import ComsLeftFriendList from "../components/ComsLeftFriendList";

const ComsLeftMenu = () => {

    const returnCenterMenuFromLeft = () => {
        const leftMenu = document.getElementById("leftMenu");
        const centerMenu = document.getElementById("centerMenu");
        if (leftMenu) {
          leftMenu.classList.toggle("hidden");
          leftMenu.classList.toggle( "md:block");
        }
        if (centerMenu){
          centerMenu.classList.toggle("hidden");
          centerMenu.classList.toggle("md:block");
        }
      };

  return (
    <div id="leftMenu" className="hidden md:block md:w-1/4  text-black">

        <div className="md:hidden flex w-full justify-end p-1">
            <button onClick={returnCenterMenuFromLeft} className=" bg-white rounded p-1 "> back.svg</button>

        </div>

        <div className="flex w-full justify-center items-center py-1">
        <ComsLeftDropDown />
        </div>

        <div className="flex flex-col h-200 text-white overflow-y-scroll">
        <ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList />
        <ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList />
        <ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList />
        <ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList />
        <ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList /><ComsLeftFriendList />
        </div>
    </div>
  );
};

export default ComsLeftMenu;
