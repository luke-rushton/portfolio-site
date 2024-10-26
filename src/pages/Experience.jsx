import React from "react";
import { useState, useEffect } from "react";
import ContentPlaceholder from "../components/ContentPlaceholder";
import { useSpring, animated } from "react-spring";

function Experience() {
  //date for api call
  const restPath = "https://lukerushton.com/IDlljioTsC/wp-json/wp/v2/pages/38";
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

  //animations
  const fadeIn = useSpring({
    from: { opacity: 0 },
    opacity: isLoaded ? 1 : 0,
    config: {
      duration: 500,
    },
  });
  return (
    <>
      {isLoaded ? (
        <animated.main className="experience-page page-content" style={fadeIn}>
          {/* title */}
          <h1>{restData.title.rendered}</h1>

          {/*content */}
          <div
            className="work-wp-content"
            dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
          ></div>
        </animated.main>
      ) : (
        <ContentPlaceholder />
      )}
    </>
  );
}

export default Experience;
