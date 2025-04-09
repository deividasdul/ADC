"use client";

import React from "react";

const ComsMdLeftMenu = () => {
  const handleToggleMenu2 = () => {
    const rightMenu = document.getElementById("rightMenu");
    const centerMenu = document.getElementById("centerMenu");
    if (rightMenu) {
      rightMenu.classList.toggle("hidden");
    }
    if (centerMenu){
      centerMenu.classList.toggle("hidden");
    }
  };

  return (
    <div className="w-1/10 md:hidden flex justify-start px-2">
      <button onClick={handleToggleMenu2} className="bg-white rounded p-1">
        .svg2
      </button>
    </div>
  );
};

export default ComsMdLeftMenu;
