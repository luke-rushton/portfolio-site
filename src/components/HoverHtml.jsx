import { Html } from "@react-three/drei";
import React from "react";

function HoverHtml({ position, visible, title }) {
  return (
    <Html
      center
      zIndexRange={[10, 0]}
      position={position}
      style={{
        transition: "0.5s",
        opacity: visible ? 1 : 0,
        pointerEvents: "none",
      }}
    >
      <h2>{title}</h2>
    </Html>
  );
}

export default HoverHtml;
