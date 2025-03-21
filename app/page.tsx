"use client";

import React from "react";
import { OrbitControls } from "@react-three/drei";

import { Box } from "@mui/material";
import Image from "next/image";

import Renderer from "./components/Renderer";
import Earth from "./components/models/Earth";

import bg from "../public/images/sky.jpg";

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[-10, 3, 0]} intensity={5} />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Box width={"100%"} height={"100vh"} position={"relative"}>
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Renderer>
          <Light />
          <Earth />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Renderer>
      </Box>
    </>
  );
};

export default Home;
