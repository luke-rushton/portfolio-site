import React, { useState, useEffect } from "react";
import { div } from "three/webgpu";

function PopupPage({ active, close, page }) {
  const restPath = "http://localhost/portfolio/wp-json/wp/v2/pages/" + page;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <div className={`popup-mask ${active}`}>
      <article className={`popup`}>
        <button className="close-button" onClick={close}>
          <img src="/x-mark.svg" />
        </button>
        {/* ROUTER GOES HERE */}
        {isLoaded ? <h1>{restData.title.rendered}</h1> : <h1>Loading</h1>}
      </article>
    </div>
  );
}

export default PopupPage;
