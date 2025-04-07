"use client";

import React from "react";

import { usePathname } from "next/navigation";

const NavItem = ({ path, label }) => {
  const pathName = usePathname();
  return (
    <a
      className={`${
        pathName === path && `text-green-500`
      } hover:text-green-500 duration-300 ease-in-out `}
      href={path}
    >
      {label}
    </a>
  );
};

const Header = () => {
  return (
    <div className="flex items-center bg-gray-950 p-8">
      <div className="basis-full">
        <a href="/">
          <img className="w-64" src="/ADC/adc-logo.png" alt="ADC Logo" />
        </a>
      </div>

      <div className="flex gap-8 font-bold text-2xl">
        <NavItem path={"/"} label={"Home"} />
        <NavItem path={"/login"} label={"Login"} />
        <NavItem path={"/register"} label={"Register"} />
      </div>
    </div>
  );
};

export default Header;
