import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col h-full m-8">
      {/* User Profile */}
      <div className="flex w-full items-center gap-4 mb-4">
        <img className="w-16" src="/images/user.png" alt="User icon" />
        <h2 className="text-3xl">User Profile</h2>
      </div>

      {/* Profile Image */}
      <div className="flex gap-8 w-full">
        <div>
          {/* <img
            className="w-64"
            src="/images/image-upload.png"
            alt="User icon"
          /> */}
          <div className="flex items-center justify-center mb-2 bg-gray-400 rounded-4xl w-64 h-64">
            <p className="text-center text-3xl">
              320x320 <br /> Profile Image
            </p>
          </div>
          <p className="text-center">dog.png | 400 kb</p>
        </div>

        {/* Upload Image */}
        <div className="flex flex-col items-center ">
          {/* <img
            className="w-48"
            src="/images/image-upload.png"
            alt="User icon"
          /> */}
          <div className="flex flex-col border-dashed border-4 items-center justify-center mb-4 rounded-4xl w-48 h-48">
            <img className="w-16 " src="/images/upload.png" alt="uplaod" />
            <p className="text-center text-2xl">
              Drag and Drop <br /> Your Image
            </p>
          </div>
          <button className="rounded-sm p-2 border-2 cursor-pointer w-full bg-blue-500 border-blue-500">
            Upload Image
          </button>
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col w-full mt-16 gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Current Password</label>
          <input
            className="border-2 p-2 rounded-md"
            type="password"
            placeholder="Password"
          />

          <label htmlFor="">New Password</label>
          <input
            className="border-2 p-2 rounded-md"
            type="password"
            placeholder="New Password"
          />

          <label htmlFor="">Repeat New Password</label>
          <div className="flex gap-2">
            <input
              className="border-2 p-2 rounded-md"
              type="password"
              placeholder="New Password"
            />
            <EditButton />
          </div>
        </div>
        <div>asd</div>
        <label htmlFor="">Email</label>
        <div className="flex gap-2">
          <input
            className="border-2 p-2 rounded-md"
            type="text"
            placeholder="Email"
          />
          <EditButton />
        </div>
        <div className="flex gap-4">
          <DangerButton label={"Remove Email"} />
          <SuccessButton label={"Confirm Email"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

const EditButton = () => {
  return (
    <button className="rounded-md w-24 font-bold p-2 border-2 cursor-pointer bg-blue-500 border-blue-500">
      Update
    </button>
  );
};

const DangerButton = ({ label }) => {
  return (
    <button className="rounded-md p-2 w-32 border-2 cursor-pointer bg-red-500 border-red-500">
      {label}
    </button>
  );
};

const SuccessButton = ({ label }) => {
  return (
    <button className="rounded-md p-2 w-32 border-2 cursor-pointer bg-green-500 border-green-500">
      {label}
    </button>
  );
};
