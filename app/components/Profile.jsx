import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col m-8 items-center">
      {/* User Profile */}
      <div className="flex items-center gap-2 mb-8">
        <img className="w-16" src="/images/user.png" alt="User Icon" />
        <h2 className="text-3xl">User Profile</h2>
      </div>

      {/* Profile Image */}
      <div className="flex gap-8">
        <div>
          <div className="flex items-center justify-center mb-2 bg-gray-400 rounded-4xl w-64 h-64">
            <p className="text-center text-3xl">
              320x320 <br /> Profile Image
            </p>
          </div>
          <p className="text-center">cat.png | 400 kb</p>
        </div>
        {/* Upload Image */}
        <div className="flex flex-col mr-16">
          <div className="flex flex-col border-dashed border-4 items-center justify-center mb-2 rounded-4xl w-48 h-48">
            <img className="w-16 " src="/images/upload.png" alt="uplaod" />
            <p className="text-center text-2xl">
              Drag and Drop <br /> Your Image
            </p>
          </div>
          <CustomButton label={"Upload Image"} bgColor={"bg-blue-500"} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Name</label>
          <div className="flex gap-4">
            <input
              className="border-2 p-2 rounded-md"
              type="text"
              placeholder="Name"
            />
            <CustomButton label={"Update"} bgColor={"bg-blue-500"} />
          </div>
          <CustomButton label={"Generate Name"} bgColor={"bg-green-500"} />

          <label htmlFor="">Name for Strangers</label>
          <div className="flex gap-4">
            <input
              className="border-2 p-2 rounded-md"
              type="text"
              placeholder="Name"
            />
            <CustomButton label={"Update"} bgColor={"bg-blue-500"} />
          </div>
          <CustomButton label={"Generate Name"} bgColor={"bg-green-500"} />
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

const CustomButton = ({ label, bgColor }) => {
  return (
    <button
      className={`rounded-md border-none p-2 cursor-pointer w-full font-bold ${bgColor}`}
    >
      {label}
    </button>
  );
};

const EditButton = () => {
  return (
    <button className="rounded-md border-none p-2 cursor-pointer bg-blue-500 w-full font-bold">
      Update
    </button>
  );
};

const DangerButton = ({ label }) => {
  return (
    <button className="rounded-md border-none p-2 cursor-pointer bg-red-500 w-full font-bold">
      {label}
    </button>
  );
};

const SuccessButton = ({ label }) => {
  return (
    <button className="rounded-md border-none p-2 cursor-pointer bg-green-500 w-full font-bold">
      {label}
    </button>
  );
};
