import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    // <AppBar position="relative">
    //   <Toolbar
    //     sx={{
    //       display: "flex",
    //       justifyContent: "flex-end",
    //       gap: 2,
    //     }}
    //   >
    //     <Link href={"/"}>Home</Link>
    //     <Link href={"/login"}>Login</Link>
    //     <Link href={"/register"}>Register</Link>
    //   </Toolbar>
    // </AppBar>
    <nav className="flex relative justify-end gap-4 text-3xl p-4 bg-gray-200 text-black">
      <a className="hover:underline hover:animate-bounce" href="/">
        Home
      </a>
      <a className="hover:underline hover:animate-bounce" href="/login">
        Login
      </a>
      <a className="hover:underline hover:animate-bounce" href="/register">
        Register
      </a>
    </nav>
  );
};

export default Header;
