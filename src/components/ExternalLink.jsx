import React from "react";

function ExternalLink({ url, title, img }) {
  return (
    <a href={url} className="external-link">
      <img src={img} alt={title} />
    </a>
  );
}

export default ExternalLink;
