import React, { useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextureLoader } from "three";
import Tile from "./Tile";
import Cloud from "./Cloud";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

function Island({ position }) {
  //hover effect state
  const [hovered, hover] = useState(null);

  //function for grouping
  function object_group(object_position) {
    return [
      position[0] + object_position[0],
      position[1] + object_position[1],
      position[2] + object_position[2],
    ];
  }
  return (
    <>
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
          <meshStandardMaterial opacity={0} transparent />
        </mesh>

        {/*the island*/}
        <Select enabled={hovered}>
          <Tile
            model="hex_coast_A"
            position={object_group([2, 0, 0])}
            rotation={[0, (4 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_B"
            position={object_group([0, 0, 0])}
            rotation={[0, (2 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_D"
            position={object_group([1, 0, -Math.sqrt(3)])}
            rotation={[0, (4 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_E"
            position={object_group([4, 0, 0])}
            rotation={[0, (2 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_C"
            position={object_group([-1, 0, Math.sqrt(3)])}
            rotation={[0, (2 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_D"
            position={object_group([3, 0, -Math.sqrt(3)])}
            rotation={[0, (3 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_C"
            position={object_group([5, 0, -Math.sqrt(3)])}
            rotation={[0, (4 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_B"
            position={object_group([6, 0, 0])}
            rotation={[0, (4 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_D"
            position={object_group([7, 0, Math.sqrt(3)])}
            rotation={[0, (0 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_E"
            position={object_group([5, 0, Math.sqrt(3)])}
            rotation={[0, (5 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_D"
            position={object_group([6, 0, 2 * Math.sqrt(3)])}
            rotation={[0, (0 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_B"
            position={object_group([4, 0, 2 * Math.sqrt(3)])}
            rotation={[0, (0 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_A"
            position={object_group([2, 0, 2 * Math.sqrt(3)])}
            rotation={[0, (0 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_D"
            position={object_group([1, 0, 3 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_coast_B"
            position={object_group([0, 0, 2 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_grass"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hex_grass"
            position={object_group([3, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          {/*doodads*/}
          <Tile
            model="building_blacksmith_blue"
            position={object_group([3, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="building_stage_C"
            position={object_group([2, 0, 0 * Math.sqrt(3)])}
            rotation={[0, (3 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="building_stage_A"
            position={object_group([2, 0, 2 * Math.sqrt(3)])}
            rotation={[0, (5 * -Math.PI) / 3, 0]}
          />
          <Cloud
            model="cloud_big"
            position={object_group([6, 3, 1 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hills_C_trees"
            position={object_group([5, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (3 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="hills_A_trees"
            position={object_group([4, 0, 0 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="building_grain"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="fence_stone_straight_gate"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (3 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="fence_stone_straight"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (2 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="fence_stone_straight"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (1 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="fence_stone_straight"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (6 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="fence_stone_straight"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (5 * -Math.PI) / 3, 0]}
          />
          <Tile
            model="fence_stone_straight"
            position={object_group([1, 0, 1 * Math.sqrt(3)])}
            rotation={[0, (4 * -Math.PI) / 3, 0]}
          />
        </Select>
      </Selection>
    </>
  );
}

export default Island;
