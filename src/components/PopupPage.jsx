import React from "react";
import { div } from "three/webgpu";

function PopupPage({ active, close, page }) {
  return (
    <div className={`popup-mask ${active}`}>
      <article className={`popup`}>
        <button className="close-button" onClick={close}>
          <img src="/x-mark.svg" />
        </button>
        {/* ROUTER GOES HERE */}
      </article>
    </div>
  );
}

export default PopupPage;
