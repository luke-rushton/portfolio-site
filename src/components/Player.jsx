import React, { useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Player() {
  //loading model

  //for controlling the character
  const mesh = useRef();
  const [, get] = useKeyboardControls();
  //variables for control speed
  const speed = 0.05;
  const rotationSpeed = 0.03;

  let forwardDirectionRadian = 1.5708; //facing up Y axis

  //detect and apply inputs from keyboard
  useFrame((state) => {
    const { forward, backward, left, right, jump } = get();

    //update these based on orientation of 3d model
    if (forward) {
      mesh.current.position.x += speed * Math.sin(forwardDirectionRadian);
      mesh.current.position.z += speed * Math.cos(forwardDirectionRadian);
    }
    if (backward) {
      mesh.current.position.x -= speed * Math.sin(forwardDirectionRadian);
      mesh.current.position.z -= speed * Math.cos(forwardDirectionRadian);
    }
    if (left) {
      forwardDirectionRadian += rotationSpeed;
      mesh.current.rotation.y += rotationSpeed;
    }
    if (right) {
      forwardDirectionRadian -= rotationSpeed;
      mesh.current.rotation.y -= rotationSpeed;
    }
  });
  return (
    <mesh ref={mesh} position={[1, 0, 1]} scale={1}>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}

export default Player;
