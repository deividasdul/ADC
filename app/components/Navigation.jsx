"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ImageIcon from "@mui/icons-material/Image";
import NavItems from "../components/NavItems";

const Navigation = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar position="relative" sx={{ p: 2, backgroundColor: "#1E2939" }}>
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          {/* TODO: Add logo */}
          <span style={{ flex: 1 }}>
            <ImageIcon fontSize={"large"} />
          </span>

          {smallScreen ? (
            <IconButton
              onClick={() => {
                setIsOpen((prevState) => !prevState);
              }}
            >
              <MenuIcon htmlColor="white" />
            </IconButton>
          ) : (
            <NavItems color={"#DDF2FF"} />
          )}
        </Toolbar>
      </AppBar>
      {isOpen && smallScreen && (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#DDF2FF",
          }}
        >
          {<NavItems color={"#1E2939"} />}
        </Container>
      )}
    </>
  );
};

export default Navigation;
