import React, { useState } from "react";
import { Html, Text } from "@react-three/drei";
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
import bigIslandProps from "../data/bigIslandProps";

//hover text
import HoverHtml from "./HoverHtml";

import Island from "./Island";

function HoverSections({ setPage, isVisible }) {
  //hover effect state
  const [hoveredOne, hoverOne] = useState(null);
  const [hoveredTwo, hoverTwo] = useState(null);
  const [hoveredThree, hoverThree] = useState(null);
  const [hoveredFour, hoverFour] = useState(null);
  const [hoveredFive, hoverFive] = useState(null);
  const [hoveredSix, hoverSix] = useState(null);

  //navigation
  const navigate = useNavigate();

  return (
    <Selection>
      {/*outline effect */}
      <EffectComposer multisampling={0} autoClear={false}>
        <Outline
          blur
          visibleEdgeColor="white"
          hiddenEdgeColor="white"
          edgeStrength={10}
          width={1000}
          pulseSpeed={0.5}
        />
      </EffectComposer>
      {/* hitbox spheres for outline ffect */}

      <mesh
        position={[-0, 0, -4 * Math.sqrt(3)]}
        onPointerEnter={(e) => {
          e.stopPropagation();
          hoverOne(true);
        }}
        onPointerOut={() => hoverOne(false)}
        onClick={() => {
          isVisible("visible");
          setPage("12");
          navigate("/contact");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>

      <mesh
        position={[6, 0, 2 * Math.sqrt(3)]}
        onPointerEnter={(e) => {
          e.stopPropagation();
          hoverTwo(true);
        }}
        onPointerOut={() => hoverTwo(false)}
        onClick={() => {
          isVisible("visible");
          setPage("17");
          navigate("/works");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>

      <mesh
        position={[6, 0, -2 * Math.sqrt(3)]}
        onPointerEnter={(e) => {
          e.stopPropagation();
          hoverThree(true);
        }}
        onPointerOut={() => hoverThree(false)}
        stopPropagation
        onClick={() => {
          isVisible("visible");
          setPage("12");
          navigate("/about");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>

      <mesh
        position={[-6, 0, 2 * Math.sqrt(3)]}
        onPointerEnter={(e) => {
          e.stopPropagation();
          hoverFour(true);
        }}
        onPointerOut={() => hoverFour(false)}
        onClick={() => {
          isVisible("visible");
          setPage("8");
          navigate("/experience");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>

      <mesh
        position={[-6, 0, -2 * Math.sqrt(3)]}
        onPointerEnter={(e) => {
          e.stopPropagation();
          hoverFive(true);
        }}
        onPointerOut={() => hoverFive(false)}
        onClick={() => {
          isVisible("visible");
          setPage("40");
          navigate("/");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>

      <mesh
        position={[0, 0, 4 * Math.sqrt(3)]}
        onPointerEnter={(e) => {
          e.stopPropagation();
          hoverSix(true);
        }}
        onPointerOut={() => hoverSix(false)}
        onClick={() => {
          isVisible("visible");
          setPage("8");
          navigate("/experience");
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0.3} transparent />
      </mesh>

      {/* the world */}
      <Island position={[0, 0, 0]} tileset={bigIsland} propset={emptyProps} />

      <Select enabled={hoveredOne}>
        <Island
          position={[0, 0, -4 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
        <HoverHtml
          position={[0, 2, -4 * Math.sqrt(3)]}
          visible={hoveredOne}
          title="Contact"
        />
      </Select>
      <Select enabled={hoveredTwo}>
        <Island
          position={[6, 0, 2 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
        <HoverHtml
          position={[6, 2, 2 * Math.sqrt(3)]}
          visible={hoveredTwo}
          title="Works"
        />
      </Select>
      <Select enabled={hoveredThree}>
        <Island
          position={[6, 0, -2 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
        <HoverHtml
          position={[6, 2, -2 * Math.sqrt(3)]}
          visible={hoveredThree}
          title="About"
        />
      </Select>
      <Select enabled={hoveredFour}>
        <Island
          position={[-6, 0, 2 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
        <HoverHtml
          position={[-6, 2, 2 * Math.sqrt(3)]}
          visible={hoveredFour}
          title="Experience"
        />
      </Select>
      <Select enabled={hoveredFive}>
        <Island
          position={[-6, 0, -2 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
        <HoverHtml
          position={[-6, 2, -2 * Math.sqrt(3)]}
          visible={hoveredFive}
          title="home"
        />
      </Select>
      <Select enabled={hoveredSix}>
        <Island
          position={[0, 0, 4 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
      </Select>
      <HoverHtml
        position={[0, 2, 4 * Math.sqrt(3)]}
        visible={hoveredSix}
        title="Experience"
      />
    </Selection>
  );
}

export default HoverSections;
