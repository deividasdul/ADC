"use client";

import { Box, Container } from "@mui/material";
import React from "react";
import Image from "next/image";
import bg from "../public/images/background.jpg";
import { Canvas } from "@react-three/fiber";
import Phone from "./components/Phone";
import { PerspectiveCamera } from "@react-three/drei";
// import { useControls } from "leva";

const Home = () => {
  // For placing objects on screen
  // const x = useControls("Phone", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  // });

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
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <Phone scale={2.5} position={[0, 0, 0]} rotation={[3.7, 1.7, 2.5]} />
          <ambientLight position={[0, 0, 0]} color={"#F0F0F0"} intensity={10} />
          {/* <directionalLight /> */}
        </Canvas>
        <Container></Container>
      </Box>
    </>
  );
};

export default Home;
