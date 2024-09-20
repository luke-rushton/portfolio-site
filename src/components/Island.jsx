import React, { useState } from "react";
import Tile from "./Tile";
import Prop from "./Prop";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

function Island({ position, tileset, propset }) {
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
          position={object_group([3, -0.5, 1.5])}
          onPointerEnter={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          <sphereGeometry args={[4, 8, 8]} />
          <meshStandardMaterial opacity={0} transparent />
        </mesh>

        {/*the island*/}
        <Select enabled={hovered}>
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
          {propset.map((prop, i) => {
            return (
              <Prop
                model={prop.model}
                position={object_group(prop.position)}
                rotation={prop.rotation}
                key={prop.position}
              />
            );
          })}
        </Select>
      </Selection>
    </>
  );
}

export default Island;
