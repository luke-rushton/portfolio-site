import React, { useState } from "react";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";

//navigation
import { useNavigate } from "react-router-dom";

//js island objects
import testIsland from "../data/testIsland";
import testProps from "../data/testProps";
import tempIsland from "../data/tempIsland";
import emptyProps from "../data/emptyProps";
import bigIsland from "../data/bigIsland";

import Island from "./Island";

function HoverSections({ setPage, isVisible }) {
  //hover effect state
  const [hovered, hover] = useState(null);
  const [hoveredOne, hoverOne] = useState(null);
  const [hoveredTwo, hoverTwo] = useState(null);
  const [hoveredThree, hoverThree] = useState(null);
  const [hoveredFour, hoverFour] = useState(null);

  //navigation
  const navigate = useNavigate();

  return (
    <Selection>
      {/*outline effect THIS IS NOT PERFORMANT*/}
      <EffectComposer multisampling={0} autoClear={false}>
        <Outline
          blur
          visibleEdgeColor="white"
          hiddenEdgeColor="white"
          edgeStrength={10}
          width={1000}
        />
      </EffectComposer>
      {/* hitbox spheres for outline ffect */}
      <mesh
        position={[0, 3, 0]}
        onPointerEnter={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={() => {
          isVisible("visible");
          setPage("8");
          navigate("/");
        }}
      >
        <sphereGeometry args={[12, 32, 32]} />
        <meshStandardMaterial opacity={0.4} transparent />
      </mesh>

      <mesh
        position={[-4, -0.5, -10]}
        onPointerEnter={() => hoverOne(true)}
        onPointerOut={() => hoverOne(false)}
        onClick={() => {
          isVisible("visible");
          setPage("12");
          navigate("/contact");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0.4} transparent />
      </mesh>

      <mesh
        position={[10, -0.5, 7]}
        onPointerEnter={() => hoverTwo(true)}
        onPointerOut={() => hoverTwo(false)}
        onClick={() => {
          isVisible("visible");
          setPage("17");
          navigate("/works");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0.4} transparent />
      </mesh>

      <mesh
        position={[15, -0.5, -4]}
        onPointerEnter={() => hoverThree(true)}
        onPointerOut={() => hoverThree(false)}
        onClick={() => {
          isVisible("visible");
          setPage("12");
          navigate("/about");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0.4} transparent />
      </mesh>

      <mesh
        position={[-9, -0.5, 9]}
        onPointerEnter={() => hoverFour(true)}
        onPointerOut={() => hoverFour(false)}
        onClick={() => {
          isVisible("visible");
          setPage("8");
          navigate("/experience");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0.4} transparent />
      </mesh>

      {/* the world */}
      <Select enabled={hovered}>
        <Island position={[0, 4, 0]} tileset={bigIsland} propset={emptyProps} />
      </Select>
      <Select enabled={hoveredTwo}>
        <Island
          position={[8, 0, 6]}
          tileset={tempIsland}
          propset={emptyProps}
        />
      </Select>
      <Select enabled={hoveredFour}>
        <Island
          position={[-11, 0, 7]}
          tileset={tempIsland}
          propset={emptyProps}
        />
      </Select>
      <Select enabled={hoveredThree}>
        <Island
          position={[13, 0, -5]}
          tileset={testIsland}
          propset={testProps}
        />
      </Select>
      <Select enabled={hoveredOne}>
        <Island
          position={[-6, 0, -12]}
          tileset={tempIsland}
          propset={emptyProps}
        />
      </Select>
    </Selection>
  );
}

export default HoverSections;
