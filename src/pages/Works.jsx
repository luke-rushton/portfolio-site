import React from "react";
import { useState, useEffect } from "react";
//child components
import WorkThumbnail from "../components/WorkThumbnail";

function Works() {
  const restPath =
    "http://localhost/portfolio/wp-json/wp/v2/portfolio_work/?_fields=id,title";
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
    <div>
      {restData.map((work) => (
        <WorkThumbnail key={work.id} id={work.id} />
      ))}
    </div>
  );
}

export default Works;
