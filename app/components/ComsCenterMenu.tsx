"use client";

import React from "react";

import ComsMdLeftMenuButton from "../components/ComsMdLeftMenuButton";
import ComsMdRightMenuButton from "../components/ComsMdRightMenuButton";


const ComsCenterMenu = () => {

  return (
        <div id="centerMenu" className="w-full md:w-2/4 bg-red-400 text-black">
          <div className="w-full flex justify-center items-center bg-orange-300 py-1"> 



            <ComsMdLeftMenuButton/>

            <div className="w-8/10 flex justify-center text-lg">
              <p><strong>Chat.name.here</strong></p>
            </div>

            <ComsMdRightMenuButton/>
            
          </div>
          <div className="w-full flex ">
              message.boxhere

          </div>
        </div>
  );
};

export default ComsCenterMenu;
