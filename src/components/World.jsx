import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  KeyboardControls,
  CameraControls,
  PerspectiveCamera,
  Bvh,
} from "@react-three/drei";
import Island from "./Island";
import Ocean from "./Ocean";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import Player from "./Player";

//js island objects
import testIsland from "../data/testIsland";
import testProps from "../data/testProps";
import tempIsland from "../data/tempIsland";
import emptyProps from "../data/emptyProps";

//test objects
import Prop from "./Prop";
import PopupPage from "./PopupPage";
import { Perf } from "r3f-perf";

//navigation
import { BrowserRouter, useNavigate } from "react-router-dom";
import { APP_FOLDER_NAME } from "../globals";

function World() {
  //hover effect state
  const [hovered, hover] = useState(null);
  const [hoveredOne, hoverOne] = useState(null);
  const [hoveredTwo, hoverTwo] = useState(null);
  const [hoveredThree, hoverThree] = useState(null);
  const [hoveredFour, hoverFour] = useState(null);
  //Popup Visibility
  const [visibility, isVisible] = useState("invisible");
  //track what page we want to load based on clicked island
  const [page, setPage] = useState("8");
  //navigation
  const navigate = useNavigate();
  //character position state
  const [position, setPosition] = useState([0, 0, 0]);

  return (
    <div className="world">
      <PopupPage
        active={visibility}
        close={() => isVisible("invisible")}
        page={page}
      />
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
        ]}
      >
        <Canvas camera={{ position: [2, 2, 2], rotation: [0, 0, 0] }}>
          <Player
            position={position}
            setPosition={(input) => setPosition(input)}
          />
          <ambientLight intensity={Math.PI / 2} />
          {/* ocean */}
          <Ocean />
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
              position={[3, -0.5, 1.5]}
              onPointerEnter={() => hover(true)}
              onPointerOut={() => hover(false)}
              onClick={() => {
                isVisible("visible");
                setPage("8");
                navigate("/");
              }}
            >
              <sphereGeometry args={[4, 8, 8]} />
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
              <Island
                position={[0, 0, 0]}
                tileset={testIsland}
                propset={testProps}
              />
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
                tileset={tempIsland}
                propset={emptyProps}
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
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default World;
