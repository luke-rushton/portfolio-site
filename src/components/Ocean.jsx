import React from "react";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const fragmentShader = `
uniform float u_time;

void main() {
  gl_FragColor = vec4(0.7,0, 0.4, 0.1);
}`;

function Ocean() {
  const mesh = useRef();

  //used in combination with useframe to track time within the shader
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, -0.2, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1000}
    >
      <planeGeometry />
      <shaderMaterial fragmentShader={fragmentShader} uniforms={uniforms} />
    </mesh>
  );
}

export default Ocean;
