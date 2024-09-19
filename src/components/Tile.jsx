import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextureLoader } from "three";
import { useGLTF } from "@react-three/drei";

function Tile({ model, position, rotation }) {
  //2,0,0
  const { nodes, materials } = useGLTF("/" + model + ".gltf");
  return (
    <mesh
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
      geometry={nodes[model].geometry}
      material={materials.hexagons_medieval}
    ></mesh>
  );
}

export default Tile;
