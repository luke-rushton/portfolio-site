import React from "react";
import { useState, useEffect } from "react";
import ContentPlaceholder from "../components/ContentPlaceholder";

function About() {
  //date for api call
  const restPath = "http://localhost/portfolio/wp-json/wp/v2/pages/12";
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
    <>
      {isLoaded ? (
        <div className="about-page page-content">
          {/* title */}
          <h1>{restData.title.rendered}</h1>
          {/*content */}
          <div
            className="work-wp-content"
            dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
          ></div>
        </div>
      ) : (
        <ContentPlaceholder />
      )}
    </>
  );
}

export default About;
