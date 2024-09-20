import React from "react";
import { useGLTF } from "@react-three/drei";

function Prop({ model, position, rotation }) {
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

export default Prop;
