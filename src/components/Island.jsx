import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextureLoader } from "three";
import Tile from "./Tile";

function Island({ position }) {
  function object_group(object_position) {
    return [
      position[0] + object_position[0],
      position[1] + object_position[1],
      position[2] + object_position[2],
    ];
  }
  const coastTile = useLoader(GLTFLoader, "/hex_coast_A.gltf");
  const coastTileB = useLoader(GLTFLoader, "/hex_coast_B.gltf");
  const texture = useLoader(TextureLoader, "/hexagons_medieval.png");
  return (
    <>
      {/*the island*/}
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
      <Tile
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
    </>
  );
}

export default Island;
