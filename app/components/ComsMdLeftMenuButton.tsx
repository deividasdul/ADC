"use client";

import React from "react";

const ComsMdLeftMenu = () => {
  const handleToggleMenu = () => {
    const leftMenu = document.getElementById("leftMenu");
    const centerMenu = document.getElementById("centerMenu");
    if (leftMenu) {
      leftMenu.classList.toggle("hidden");
      leftMenu.classList.toggle("w-full");
    }
    if (centerMenu){
      centerMenu.classList.toggle("hidden");
    }
  };

  return (
    <div className="w-1/10 md:hidden flex justify-start px-2">
      <button onClick={handleToggleMenu} className="bg-white rounded p-1">
        .svg
      </button>
    </div>
  );
};

export default ComsMdLeftMenu;
