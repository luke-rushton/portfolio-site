import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Ocean from "./Ocean";

//ui components
import Header from "./Header";

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
  //navigation
  const navigate = useNavigate();

  //track what page we want to load based on clicked island
  const [page, setPage] = useState("8");
  return (
    <div className="world">
      <PopupPage
        active={visibility}
        close={() => {
          isVisible("invisible");
          navigate("/");
        }}
        page={page}
      />
      <Loading />
      {/* <Suspense fallback={<Loading />}> */}
      <Header open={() => isVisible("visible")} />
      <Canvas camera={{ position: [-20, 4, 0] }}>
        <ambientLight intensity={Math.PI / 2} />
        {/* boat */}
        <Boat />
        {/* ocean */}
        <Ocean />
        {/* <Sky elevation={0} turbidity={0.01} /> */}
        <HoverSections setPage={setPage} isVisible={isVisible} />
      </Canvas>
      {/* </Suspense> */}
    </div>
  );
}

export default World;
