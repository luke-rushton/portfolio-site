import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextureLoader } from "three";
import Island from "./Island";

function World() {
  return (
    <Canvas>
      <OrbitControls />
      <spotLight
        position={[16, 10, 16]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <ambientLight intensity={Math.PI / 2} />
      <Island position={[0, 0, 0]} />
    </Canvas>
  );
}

export default World;
