import React, { useEffect, useRef, useState } from "react";
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
import { useFrame } from "@react-three/fiber";

function HoverSections({ isVisible, toggleAnimation, cameraRef }) {
  //hover effect state
  const [hoveredOne, hoverOne] = useState(null);
  const [hoveredTwo, hoverTwo] = useState(null);
  const [hoveredThree, hoverThree] = useState(null);
  const [hoveredFour, hoverFour] = useState(null);
  const [hoveredFive, hoverFive] = useState(null);
  const [hoveredSix, hoverSix] = useState(null);

  const refOne = useRef(); //-1.5708
  const refTwo = useRef(); //0.545805
  const refThree = useRef(); //-0.5236
  const refFour = useRef(); //2.61799
  const refFive = useRef(); //-2.618
  const refSix = useRef(); //1.5708

  //closest selection
  const closest = true;
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
    } else if (angle >= -1.0472 && angle < 0) {
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
        ref={refOne}
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
        ref={refTwo}
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
        ref={refThree}
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
        ref={refFour}
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
        ref={refFive}
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
        ref={refSix}
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

      <Select enabled={hoveredFour || isClosest[3]}>
        <Island
          position={[-6, 0, 2 * Math.sqrt(3)]}
          tileset={experienceTiles}
          propset={emptyProps /*experienceProps*/}
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
          tileset={tempIsland}
          propset={emptyProps}
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
          tileset={tempIsland}
          propset={emptyProps}
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
          propset={emptyProps /*linkedInProps*/}
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
          tileset={tempIsland}
          propset={emptyProps}
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
          tileset={tempIsland}
          propset={emptyProps}
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
