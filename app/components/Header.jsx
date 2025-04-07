"use client";

import React from "react";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center bg-gray-950 p-8">
      <div className="basis-full">
        <a href="/">
          <img className="w-64" src="/ADC/adc-logo.png" alt="ADC Logo" />
        </a>
      </div>

      <div className="flex gap-8 font-bold text-2xl">
        <a
          className={`${
            pathName === "/" && `text-green-500`
          } hover:text-green-500 duration-300 ease-in-out `}
          href="/"
        >
          Home
        </a>
        <a
          className={`${
            pathName === "/login" && `text-green-500`
          } hover:text-green-500 duration-300 ease-in-out `}
          href="/login"
        >
          Login
        </a>
        <a
          className={`${
            pathName === "/register" && `text-green-500`
          } hover:text-green-500 duration-300 ease-in-out `}
          href="/register"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Header;
