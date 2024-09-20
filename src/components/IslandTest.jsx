import React, { useState } from "react";
import Tile from "./Tile";
import Cloud from "./Cloud";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

function IslandTest({ position, tileset }) {
  //hover effect state

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
      {/*the IslandTest*/}

      {/* load IslandTest from json */}
      {tileset.map((tile, i) => {
        return (
          <Tile
            model={tile.model}
            position={object_group(tile.position)}
            rotation={tile.rotation}
            key={tile.position}
          />
        );
      })}
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
    </>
  );
}

export default IslandTest;
