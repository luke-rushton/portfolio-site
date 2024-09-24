import React from "react";
import { div } from "three/webgpu";

function PopupPage({ active, close, page }) {
  return (
    <div className={`popup-mask ${active}`}>
      <article className={`popup`}>
        <button className="close-button" onClick={close}>
          <img src="/x-mark.svg" />
        </button>
        <h1>{page}</h1>
        {/* ROUTER GOES HERE */}
      </article>
    </div>
  );
}

export default PopupPage;
