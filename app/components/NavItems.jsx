import React from "react";
import { usePathname } from "next/navigation";
import navItems from "../constants/navItems";
import Link from "next/link";
import { Typography } from "@mui/material";

const NavItems = (props) => {
  const pathName = usePathname();

  return navItems.map(({ id, label, href, icon }) => (
    <Link
      onClick={() => {
        setIsOpen(false);
      }}
      key={id}
      href={href}
    >
      <Typography
        variant="h6"
        {...props}
        sx={{
          "&:hover": {
            fontSize: "1.5rem",
          },
          transition: "all 0.3s",
          fontWeight: pathName === href && 900,
        }}
      >
        {label} <span>{icon}</span>
      </Typography>
    </Link>
  ));
};

export default NavItems;
