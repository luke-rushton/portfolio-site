import React from "react";

function PopupPage({ active, close, page }) {
  return (
    <article className={`popup ${active}`}>
      <button onClick={close}>X</button>
      {/* ROUTER GOES HERE */}
      <h2>{page}</h2>
    </article>
  );
}

export default PopupPage;
