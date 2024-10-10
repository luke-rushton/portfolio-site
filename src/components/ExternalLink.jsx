import React from "react";

function ExternalLink({ url, title, img }) {
  return (
    <a href={url}>
      <img src={img} alt={title} />
    </a>
  );
}

export default ExternalLink;
