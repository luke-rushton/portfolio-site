import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Island from "./Island";

//js island objects
import testIsland from "../data/testIsland";
import testProps from "../data/testProps";

//test objects
import Prop from "./Prop";

//highlight stuff
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

function World() {
  //hover effect state
  const [hovered, hover] = useState(null);

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
      <Selection>
        {/*outline effect */}
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor="white"
            hiddenEdgeColor="white"
            edgeStrength={100}
            width={1000}
          />
        </EffectComposer>

        {/* hitbox sphere for outline ffect */}
        <mesh
          position={[3, -0.5, 1.5]}
          onPointerEnter={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          <sphereGeometry args={[4, 8, 8]} />
          <meshStandardMaterial opacity={0.4} transparent />
        </mesh>

        {/* the world */}
        <Select enabled={hovered}>
          <Island
            position={[0, 0, 0]}
            tileset={testIsland}
            propset={testProps}
          />
        </Select>
      </Selection>
    </Canvas>
  );
}

export default World;
