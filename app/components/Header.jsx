"use client";

import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { usePathname } from "next/navigation";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavItem = ({ path, label }) => {
  const pathName = usePathname();
  return (
    <a
      onClick={() => {
        setIsHidden(true);
      }}
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
  const headerRef = useRef();
  const mobileNavRef = useRef();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: "-100%",
      duration: 1,
      ease: "expo.out",
    });
  });

  return (
    <>
      <div
        ref={headerRef}
        className="flex items-center drop-shadow-xl bg-gray-950 p-8"
      >
        <div className="basis-full">
          <a href="/">
            <img className="w-64" src="/ADC/adc-logo.png" alt="ADC Logo" />
          </a>
        </div>
        <div className="flex gap-8 font-bold text-2xl">
          {!isTabletOrMobile ? (
            <>
              <NavItem path={"/"} label={"Home"} />
              <NavItem path={"/profile"} label={"Profile"} />
              <NavItem path={"/coms"} label={"Chat"} />
              <NavItem path={"/login"} label={"Login"} />
              <NavItem path={"/register"} label={"Register"} />
            </>
          ) : (
            <>
              <button onClick={handleOpen} className="cursor-pointer">
                <img
                  className="w-12 h-12"
                  src="/images/burger-menu.png"
                  alt="Burger menu"
                />
              </button>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          ref={mobileNavRef}
          className="flex flex-col items-center text-3xl gap-2 p-2 bg-gray-950"
        >
          <NavItem path={"/"} label={"Home"} />
          <NavItem path={"/profile"} label={"Profile"} />
          <NavItem path={"/coms"} label={"Chat"} />
          <NavItem path={"/login"} label={"Login"} />
          <NavItem path={"/register"} label={"Register"} />
        </div>
      )}
    </>
  );
};

export default Header;
