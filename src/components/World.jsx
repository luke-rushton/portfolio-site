import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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

function World() {
  //Popup Visibility
  const [visibility, isVisible] = useState("invisible");

  //track what page we want to load based on clicked island
  const [page, setPage] = useState("8");
  return (
    <div className="world">
      <PopupPage
        active={visibility}
        close={() => isVisible("invisible")}
        page={page}
      />
      <Suspense fallback={<Loading />}>
        <Header />
        <Canvas camera={{ position: [-20, 4, 0] }}>
          <ambientLight intensity={Math.PI / 2} />
          {/* boat */}
          <Boat />
          {/* ocean */}
          <Ocean />
          <HoverSections setPage={setPage} isVisible={isVisible} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default World;
