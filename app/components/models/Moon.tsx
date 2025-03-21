import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";

const Moon = () => {
  const moonTexture = useTexture("/images/textures/moon.jpg");
  const moonRef = useRef();

  return (
    <>
      <mesh scale={0.13} position={[5, 0, 0]}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </>
  );
};

export default Moon;
