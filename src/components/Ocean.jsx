import React from "react";

function Ocean() {
  return (
    <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1000}>
      <planeGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default Ocean;
