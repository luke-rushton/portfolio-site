import React from "react";
import Tile from "./Tile";
import Prop from "./Prop";

function Island({ position, tileset, propset }) {
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
      {/*the island*/}
      {tileset.map((tile, i) => {
        return (
          <Tile
            model={tile.model}
            position={object_group(tile.position)}
            rotation={tile.rotation}
            key={
              "tile" + object_group(tile.position) + tile.rotation + tile.model
            }
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
            key={
              "prop" + object_group(prop.position) + prop.rotation + prop.model
            }
          />
        );
      })}
    </>
  );
}

export default Island;
