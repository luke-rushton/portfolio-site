import React, { useEffect, useState } from "react";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";

//navigation
import { useNavigate } from "react-router-dom";

//js island objects
import bigIsland from "../data/bigIsland";
import bigIslandProps from "../data/bigIslandProps";
import experienceTiles from "../data/experienceTiles";
import experienceProps from "../data/experienceProps";
import linkedInTiles from "../data/linkedInTiles";
import linkedInProps from "../data/linkedInProps";
import githubTiles from "../data/githubTiles";
import githubProps from "../data/githubProps";
import emailTiles from "../data/emailTiles";
import emailProps from "../data/emailProps";
import aboutTiles from "../data/aboutTiles";
import aboutProps from "../data/aboutProps";
import worksTiles from "../data/worksTiles";
import worksProps from "../data/worksProps";

//hover text
import HoverHtml from "./HoverHtml";

import Island from "./Island";
import { useFrame } from "@react-three/fiber";

function HoverSections({ isVisible, toggleAnimation, cameraRef }) {
  //hover effect state
  const [hoveredOne, hoverOne] = useState(null);
  const [hoveredTwo, hoverTwo] = useState(null);
  const [hoveredThree, hoverThree] = useState(null);
  const [hoveredFour, hoverFour] = useState(null);
  const [hoveredFive, hoverFive] = useState(null);
  const [hoveredSix, hoverSix] = useState(null);

  //closest selection
  const [isClosest, setIsClosest] = useState([
    false,
    false,
    true,
    false,
    false,
    false,
  ]);

  //navigation
  const navigate = useNavigate();

  //mouse change hover
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = mouseHover ? "pointer" : "auto";
  }, [mouseHover]);

  //console.log(cameraRef.current.getAzimuthalAngle());
  useFrame(() => {
    let angle = cameraRef.current.getAzimuthalAngle() + 0.785398;
    if (angle >= 0 && angle < 1.0472) {
      setIsClosest([false, false, false, false, false, true]);
    } else if (angle >= 1.0472 && angle < 2.0944) {
      setIsClosest([false, true, false, false, false, false]);
    } else if (angle >= 2.0944 && angle < 3.14159) {
      setIsClosest([false, false, true, false, false, false]);
    } else if (angle >= -3.14159 && angle < -2.0944) {
      setIsClosest([true, false, false, false, false, false]);
    } else if (angle >= -2.0944 && angle < -1.0472) {
      setIsClosest([false, false, false, false, true, false]);
    } else if (angle >= -0.785 && angle < 0) {
      setIsClosest([false, false, false, true, false, false]);
    } else {
      setIsClosest([false, false, false, false, false, false]);
    }
  });
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
        position={[0, 0, -4 * Math.sqrt(3)]}
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
        propset={bigIslandProps}
      />

      <Select enabled={hoveredFour || isClosest[3]}>
        <Island
          position={[-6, 0, 2 * Math.sqrt(3)]}
          tileset={experienceTiles}
          propset={experienceProps}
        />
        <HoverHtml
          position={[-6, 2, 2 * Math.sqrt(3)]}
          visible={hoveredFour || isClosest[3]}
          title="Experience"
        />
      </Select>

      <Select enabled={hoveredSix || isClosest[5]}>
        <Island
          position={[0, 0, 4 * Math.sqrt(3)]}
          tileset={worksTiles}
          propset={worksProps}
        />
        <HoverHtml
          position={[0, 2, 4 * Math.sqrt(3)]}
          visible={hoveredSix || isClosest[5]}
          title="Works"
        />
      </Select>

      <Select enabled={hoveredTwo || isClosest[1]}>
        <Island
          position={[6, 0, 2 * Math.sqrt(3)]}
          tileset={aboutTiles}
          propset={aboutProps}
        />
        <HoverHtml
          position={[6, 2, 2 * Math.sqrt(3)]}
          visible={hoveredTwo || isClosest[1]}
          title="About"
        />
      </Select>

      <Select enabled={hoveredThree || isClosest[2]}>
        <Island
          position={[6, 0, -2 * Math.sqrt(3)]}
          tileset={linkedInTiles}
          propset={linkedInProps}
        />
        <HoverHtml
          position={[6, 2, -2 * Math.sqrt(3)]}
          visible={hoveredThree || isClosest[2]}
          title="LinkedIn"
        />
      </Select>

      <Select enabled={hoveredOne || isClosest[0]}>
        <Island
          position={[0, 0, -4 * Math.sqrt(3)]}
          tileset={githubTiles}
          propset={githubProps}
        />
        <HoverHtml
          position={[0, 2, -4 * Math.sqrt(3)]}
          visible={hoveredOne || isClosest[0]}
          title="Github"
        />
      </Select>

      <Select enabled={hoveredFive || isClosest[4]}>
        <Island
          position={[-6, 0, -2 * Math.sqrt(3)]}
          tileset={emailTiles}
          propset={emailProps}
        />
        <HoverHtml
          position={[-6, 2, -2 * Math.sqrt(3)]}
          visible={hoveredFive || isClosest[4]}
          title="Email"
        />
      </Select>
    </Selection>
  );
}

export default HoverSections;
