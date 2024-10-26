import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Ocean from "./Ocean";

//ui components
import Header from "./Header";
import DragInfo from "./DragInfo";

//test objects
import PopupPage from "./PopupPage";

//loading
import Loading from "./Loading";
import HoverSections from "./HoverSections";

//player component
import Boat from "./Boat";
import { useNavigate } from "react-router-dom";

function World() {
  //Popup Visibility
  const [visibility, isVisible] = useState("invisible");
  //page pop in animation
  const [state, toggle] = useState(false);
  //navigation
  const navigate = useNavigate();

  //closet to camera
  const cameraRef = useRef();

  return (
    <div className="world">
      <PopupPage
        active={visibility}
        close={() => {
          isVisible("invisible");
          navigate("/");
        }}
        animationState={state}
        toggleAnimation={() => toggle(false)}
      />
      <Loading />
      <DragInfo />
      <Header
        open={() => isVisible("visible")}
        toggleAnimation={() => toggle(true)}
      />
      <Canvas
        frameloop="demand"
        camera={{ near: 0.1, far: 300, position: [-20, 4, 0] }}
      >
        <ambientLight intensity={Math.PI / 2} />
        {/* boat */}
        <Boat cameraRef={cameraRef} />
        {/* lighting */}
        <spotLight
          decay={0.25}
          position={[20, 200, 20]}
          penumbra={0.9}
          intensity={6}
          angle={Math.PI / 2}
        />
        <spotLight
          decay={0.25}
          position={[20, 20, 20]}
          penumbra={0.9}
          intensity={5}
          angle={Math.PI / 3}
        />
        {/* ocean */}
        <Ocean />
        <Sky elevation={0} turbidity={0.01} />
        <HoverSections
          isVisible={isVisible}
          toggleAnimation={() => toggle(true)}
          cameraRef={cameraRef}
        />
      </Canvas>
      {/* </Suspense> */}
    </div>
  );
}

export default World;
