"use client";

import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import bg from "../public/images/background.jpg";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/models/Earth";
import { OrbitControls } from "@react-three/drei";

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-10, 3, 0]} intensity={5} />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Box width={"100vw"} height={"100vh"} position={"relative"}>
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -1,
          }}
        />

        <Canvas>
          <Light />
          <Earth />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </Box>
    </>
  );
};

export default Home;
