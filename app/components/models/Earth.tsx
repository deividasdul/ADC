"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { JSX, useRef } from "react";
import * as THREE from "three";

const Earth = (): JSX.Element => {
  const earthTexture = useTexture("/images/textures/earth.jpg");
  const earthRef = useRef<THREE.Mesh | null>(null);

  const cloudTexture = useTexture("/images/textures/clouds.jpg");
  const cloudsRef = useRef<THREE.Mesh | null>(null);

  useFrame((status, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.2;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.1;
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
