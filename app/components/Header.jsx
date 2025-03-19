import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
