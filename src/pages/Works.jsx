import React from "react";
import { useState, useEffect } from "react";
//child components
import WorkThumbnail from "../components/WorkThumbnail";

function Works() {
  const restPath =
    "http://localhost/portfolio/wp-json/wp/v2/portfolio_work?_embed";
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
    <div className="works-page page-content">
      {/* should this be dynamic */}
      <h1>Works</h1>
      <section className="works-list">
        {restData.map((work) => (
          <WorkThumbnail
            key={work.id}
            id={work.id}
            title={work.title.rendered}
            image={
              work._embedded["wp:featuredmedia"][0].media_details.sizes.medium
                .source_url
            }
          />
        ))}
      </section>
    </div>
  );
}

export default Works;
