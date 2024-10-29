import React from "react";
import { animated, useTrail } from "react-spring";
import ContentPlaceholder from "./ContentPlaceholder";

function Loading() {
  return (
    <div className="loading">
      <ContentPlaceholder />
    </div>
  );
}

export default Loading;
