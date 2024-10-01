import React from "react";
import { useState, useEffect } from "react";
import { div } from "three/webgpu";

function Testing() {
  const restPath = "http://localhost/portfolio/wp-json/wp/v2/pages/17";
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
    <div className="testing">
      {isLoaded ? <h1>{restData.title.rendered}</h1> : <h1>Loading</h1>}
      {isLoaded ? (
        <div
          dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
        ></div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default Testing;
