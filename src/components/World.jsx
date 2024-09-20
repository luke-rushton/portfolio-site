import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Island from "./Island";
import IslandTest from "./IslandTest";

//js island objects
import testIsland from "../data/testIsland";
import testProps from "../data/testProps";

//test objects
import Prop from "./Prop";

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
      <Island position={[0, 0, 0]} tileset={testIsland} propset={testProps} />
      <Prop
        model="building_lumbermill_blue"
        position={[1, 1, 1]}
        rotation={[0, 0, 0]}
      />
      <IslandTest position={[10, 0, 0]} tileset={testIsland} />
      <IslandTest position={[20, 0, 0]} tileset={testIsland} />
      <IslandTest position={[20, 0, 10]} tileset={testIsland} />
      <IslandTest position={[10, 0, 10]} tileset={testIsland} />
      <IslandTest position={[0, 0, 10]} tileset={testIsland} />
    </Canvas>
  );
}

export default World;
