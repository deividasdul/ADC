"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Earth = () => {
  const earthTexture = useTexture("/images/earth.jpg");
  const earthRef = useRef();

  const cloudTexture = useTexture("/images/clouds.jpg");
  const cloudsRef = useRef();

  useFrame((status, delta) => {
    earthRef.current.rotation.y += delta * 0.2;
    cloudsRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 64, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.51, 64, 32]} />
        <meshStandardMaterial map={cloudTexture} transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

export default Earth;
