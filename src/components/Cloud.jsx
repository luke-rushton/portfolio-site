import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
//this element is for testing hover effect

function Cloud({ model, position, rotation, hoverOn, hoverOff }) {
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

export default Cloud;
