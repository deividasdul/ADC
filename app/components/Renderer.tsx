import React, { ReactNode, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

type Props = {
  children: ReactNode;
};

const Renderer = ({ children }: Props) => {
  return <Canvas>{children}</Canvas>;
};

export default Renderer;
