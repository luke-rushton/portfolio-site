import React, { useRef, useState } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Boat() {
  const ref = useRef();
  const boatRef = useRef();
  const { nodes, materials } = useGLTF("/ship_red_accent.gltf");

  useFrame(() => {
    let x = Math.sin(ref.current.getAzimuthalAngle()) * 14;
    let z = Math.cos(ref.current.getAzimuthalAngle()) * 14;
    boatRef.current.position.x = x;
    boatRef.current.position.z = z;
    boatRef.current.rotation.y = Math.PI / 2 + ref.current.getAzimuthalAngle();
  });
  return (
    <>
      <OrbitControls
        ref={ref}
        enablePan={false}
        maxDistance={20}
        minDistance={17}
        maxPolarAngle={Math.PI / 2.05}
        minPolarAngle={Math.PI / 2.2}
        rotateSpeed={0.2}
      />
      <mesh
        ref={boatRef}
        position={[14, -0.25, 0]}
        scale={0.5}
        castShadow
        receiveShadow
        geometry={nodes["ship_red_accent"].geometry}
        material={materials.hexagons_medieval}
      ></mesh>
    </>
  );
}

export default Boat;