import React, { useEffect, useState } from "react";
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
import experienceProps from "../data/experienceProps";
import experienceTiles from "../data/experienceTiles";
import linkedInProps from "../data/linkedInProps";
import linkedInTiles from "../data/linkedInTiles";

//hover text
import HoverHtml from "./HoverHtml";

import Island from "./Island";

function HoverSections({ isVisible, toggleAnimation }) {
  //hover effect state
  const [hoveredOne, hoverOne] = useState(null);
  const [hoveredTwo, hoverTwo] = useState(null);
  const [hoveredThree, hoverThree] = useState(null);
  const [hoveredFour, hoverFour] = useState(null);
  const [hoveredFive, hoverFive] = useState(null);
  const [hoveredSix, hoverSix] = useState(null);

  //navigation
  const navigate = useNavigate();

  //mouse change hover
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = mouseHover ? "pointer" : "auto";
  }, [mouseHover]);

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
          setMouseHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          hoverOne(false);
          setMouseHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          window.open("https://github.com/luke-rushton", "_blank");
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
          setMouseHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          hoverTwo(false);
          setMouseHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          isVisible("visible");
          navigate("/about");
          toggleAnimation();
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
          setMouseHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          hoverThree(false);
          setMouseHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          window.open("https://www.linkedin.com/in/luke-rushton/", "_blank");
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
          setMouseHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          hoverFour(false);
          setMouseHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          isVisible("visible");
          navigate("/experience");
          toggleAnimation();
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
          setMouseHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          hoverFive(false);
          setMouseHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          window.open("mailto:luke.rushtonx@gmail.com", "_blank");
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
          setMouseHover(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          hoverSix(false);
          setMouseHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          isVisible("visible");
          navigate("/works");
          toggleAnimation();
        }}
      >
        <sphereGeometry args={[4, 8, 8]} />
        <meshStandardMaterial opacity={0} transparent />
      </mesh>

      {/* the world */}
      <Island
        position={[0, 0, 0]}
        tileset={bigIsland}
        propset={emptyProps /*bigIslandProps*/}
      />

      <Select enabled={hoveredFour}>
        <Island
          position={[-6, 0, 2 * Math.sqrt(3)]}
          tileset={experienceTiles}
          propset={emptyProps /*experienceProps*/}
        />
        <HoverHtml
          position={[-6, 2, 2 * Math.sqrt(3)]}
          visible={hoveredFour}
          title="Experience"
        />
      </Select>

      <Select enabled={hoveredSix}>
        <Island
          position={[0, 0, 4 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
        <HoverHtml
          position={[0, 2, 4 * Math.sqrt(3)]}
          visible={hoveredSix}
          title="Works"
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
          title="About"
        />
      </Select>

      <Select enabled={hoveredThree}>
        <Island
          position={[6, 0, -2 * Math.sqrt(3)]}
          tileset={linkedInTiles}
          propset={emptyProps /*linkedInProps*/}
        />
        <HoverHtml
          position={[6, 2, -2 * Math.sqrt(3)]}
          visible={hoveredThree}
          title="LinkedIn"
        />
      </Select>

      <Select enabled={hoveredOne}>
        <Island
          position={[0, 0, -4 * Math.sqrt(3)]}
          tileset={tempIsland}
          propset={emptyProps}
        />
        <HoverHtml
          position={[0, 2, -4 * Math.sqrt(3)]}
          visible={hoveredOne}
          title="Github"
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
          title="Email"
        />
      </Select>
    </Selection>
  );
}

export default HoverSections;
