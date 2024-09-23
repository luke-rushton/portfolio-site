import React from "react";
import { div } from "three/webgpu";

function PopupPage({ active, close, page }) {
  return (
    <div className={`popup-mask ${active}`}>
      <article className={`popup`}>
        <button className="close-button" onClick={close}>
          X
        </button>
        {/* ROUTER GOES HERE */}
        <h2>{page}</h2>
      </article>
    </div>
  );
}

export default PopupPage;
