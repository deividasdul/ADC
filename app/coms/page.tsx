
import React from "react";


import ComsLeftMenu from "../components/ComsLeftMenu";
import ComsCenterMenu from "../components/ComsCenterMenu";
import ComsRightMenu from "../components/ComsRightMenu";


const Coms = () => {
  return (
    <>
      <div className="flex  h-200 text-white">
        {/* left */}
        <ComsLeftMenu/>


        {/* center */}
        <ComsCenterMenu/>


        {/* right */}
        <ComsRightMenu/>
      </div>
    </>
  );
};

export default Coms;
