import React, { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

type Props = {
  children: ReactNode;
};

const Renderer = ({ children }: Props) => {
  return <Canvas>{children}</Canvas>;
};

export default Renderer;
