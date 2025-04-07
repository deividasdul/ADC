import React from "react";

const ComsLeftFriendList = () => {


  return (
    <>
      <div className="w-full my-1 px-2">
        <div className="bg-gray-700 rounded px-1 py-2">
          <div className="flex">
            <div className="w-16 flex justify-center items-center bg-white aspect-square rounded-xl border border-dashed text-black border-3 border-black border-lg">
              .img
            </div>
            <div className="px-2 flex flex-col w-full justify-between">
              <div className="flex w-full">
                <div className="w-4/5">
                  friend.name
                </div>
                <div className="w-1/5 flex justify-end items-center">
                  star.svg
                </div>
              </div>
              <div className="flex">
                last.online.status
              </div>
            </div>

          </div>
        
        </div>
        
      </div>
    </>
  )
};

export default ComsLeftFriendList;
