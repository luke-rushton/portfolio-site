import React from "react";
import { useState, useEffect } from "react";

function Home() {
  //date for api call
  const restPath = "https://lukerushton.com/IDlljioTsC/wp-json/wp/v2/pages/40";
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
  return <div className="home-page page-content"></div>;
}

export default Home;
