import React, { JSX } from "react";
import { usePathname } from "next/navigation";
import navItems from "../constants/navItems";
import Link from "next/link";
import { Typography } from "@mui/material";
import fetchIcon from "../utils/fetchIcon";

const NavItems = ({
  color,
  onClick,
}: {
  color: string;
  onClick: (value: boolean) => void;
}): JSX.Element[] => {
  const pathName = usePathname();

  return navItems.map(({ id, label, href }) => (
    <Typography
      key={id}
      variant="h6"
      color={color}
      sx={{
        "&:hover": {
          fontSize: "1.5rem",
        },
        transition: "all 0.3s",
        fontWeight: pathName === href ? 900 : 500,
      }}
    >
      <Link href={href} onClick={onClick}>
        {label} {fetchIcon(href)}
      </Link>
    </Typography>
  ));
};

export default NavItems;
