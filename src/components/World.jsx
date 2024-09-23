import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Island from "./Island";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";

//js island objects
import testIsland from "../data/testIsland";
import testProps from "../data/testProps";

//test objects
import Prop from "./Prop";
import PopupPage from "./PopupPage";

function World() {
  //hover effect state
  const [hovered, hover] = useState(null);
  //Popup Visibility
  const [visibility, isVisible] = useState("invisible");
  //track what page we want to load based on clicked island
  const [page, setPage] = useState("");

  return (
    <div className="world">
      <PopupPage
        active={visibility}
        close={() => isVisible("invisible")}
        page={page}
      />
      <Canvas>
        <OrbitControls />
        <spotLight
          position={[16, 10, 16]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <ambientLight intensity={Math.PI / 2} />
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
            position={[3, -0.5, 1.5]}
            onPointerEnter={() => hover(true)}
            onPointerOut={() => hover(false)}
            onClick={() => {
              isVisible("visible");
              setPage("test");
            }}
          >
            <sphereGeometry args={[4, 8, 8]} />
            <meshStandardMaterial opacity={0} transparent />
          </mesh>

          {/* the world */}
          <Select enabled={hovered}>
            <Island
              position={[0, 0, 0]}
              tileset={testIsland}
              propset={testProps}
            />
          </Select>
        </Selection>
      </Canvas>
    </div>
  );
}

export default World;
