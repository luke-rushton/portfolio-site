import React from "react";
import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const fragmentShader = `

void main() {
  gl_FragColor = vec4(0.7,0, 0.4, 0.1);
}`;

function Ocean() {
  const mesh = useRef();

  //loading water textures
  const height = useLoader(THREE.TextureLoader, "/Water_002_DISP.png");
  height.wrapS = THREE.RepeatWrapping;
  height.wrapT = THREE.RepeatWrapping;
  height.repeat.set(150, 150);
  const color = useLoader(THREE.TextureLoader, "/Water_002_COLOR.jpg");
  const normal = useLoader(THREE.TextureLoader, "/Water_002_NORM.jpg");
  normal.wrapS = THREE.RepeatWrapping;
  normal.wrapT = THREE.RepeatWrapping;
  normal.repeat.set(150, 150);
  const light = useLoader(THREE.TextureLoader, "/Water_002_OCC.jpg");
  light.wrapS = THREE.RepeatWrapping;
  light.wrapT = THREE.RepeatWrapping;
  light.repeat.set(150, 150);
  const rough = useLoader(THREE.TextureLoader, "/Water_002_ROUGH.jpg");
  rough.wrapS = THREE.RepeatWrapping;
  rough.wrapT = THREE.RepeatWrapping;
  rough.repeat.set(150, 150);

  useFrame((state) => {
    height.offset.x += 0.005;
    normal.offset.x -= 0.005;
    light.offset.x += 0.005;
    rough.offset.x += 0.005;
  });

  return (
    <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1000}>
      <planeGeometry />
      <meshStandardMaterial
        bumpMap={height}
        aoMap={light}
        map={color}
        normalMap={normal}
        roughnessMap={rough}
      />
      {/* <shaderMaterial fragmentShader={fragmentShader} /> */}
    </mesh>
  );
}

export default Ocean;
