"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { JSX, useRef } from "react";
import * as THREE from "three";

const Earth = (): JSX.Element => {
  const earthTexture = useTexture("/images/textures/earth1.jpg");
  const earthRef = useRef<THREE.Mesh | null>(null);

  // const earthNightTexture = useTexture("/images/textures/earth_night.jpg");

  const cloudTexture = useTexture("/images/textures/clouds1.jpg");
  const cloudsRef = useRef<THREE.Mesh | null>(null);

  useFrame((status, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.2;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group scale={1}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 64, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.51, 64, 32]} />
        <meshStandardMaterial map={cloudTexture} transparent opacity={0.45} />
      </mesh>
    </group>
  );
};

export default Earth;
