"use client";

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const LetterA = () => {
  return (
    <>
      <mesh position={[-2, 0, -10]} rotation={[0, 0, -0.45]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshPhysicalMaterial roughness={0} color={"#b6b6b6"} />
      </mesh>
      <mesh position={[0, 0, -10]} rotation={[0, 0, 0.45]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshPhysicalMaterial roughness={0} color={"#b6b6b6"} />
      </mesh>
      <mesh position={[-1, -1, -10]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshPhysicalMaterial roughness={0} color={"#b6b6b6"} />
      </mesh>
    </>
  );
};

const LetterD = () => {
  return (
    <>
      <mesh position={[3, 0, -10]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1, 5, 1]} />
        <meshPhysicalMaterial roughness={0} color={"#FF0000"} />
      </mesh>
      <mesh position={[3, 0, -10]} rotation={[0, 0, -Math.PI / 2]} scale={0.2}>
        <torusGeometry args={[10, 2, 16, 10, 3]} />
        <meshPhysicalMaterial roughness={0} color={"#FF0000"} />
      </mesh>
    </>
  );
};

const LetterC = () => {
  return (
    <mesh position={[9, 0, -10]} rotation={[0, 0, Math.PI / 2]} scale={0.2}>
      <torusGeometry args={[10, 2, 16, 10, 3]} />
      <meshPhysicalMaterial roughness={0} color={"#DB5B5B"} />
    </mesh>
  );
};

const RotatingCamera = ({ children }) => {
  const myCamera = React.useRef();
  let angle = React.useRef(0);

  useFrame(() => {
    angle.current += 0.01; // Adjust speed
    myCamera.current.position.x = 5 * Math.cos(angle.current);
    myCamera.current.position.z = 5 * Math.sin(angle.current);
    myCamera.current.lookAt(0, 0, -5); // Always look at the origin
  });

  return (
    <PerspectiveCamera ref={myCamera} position={[0, 0, -500]}>
      {children}
    </PerspectiveCamera>
  );
};

const Home = () => {
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "50vh",
        }}
      >
        <ambientLight color={"black"} intensity={0.75} />
        <directionalLight position={[-5, 5, 50]} intensity={1.5} />
        {/* <PerspectiveCamera position={[0, 0, 5]}> */}
        <RotatingCamera>
          <LetterA />
          <LetterD />
          <LetterC />
        </RotatingCamera>
        {/* </PerspectiveCamera> */}
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Home;
