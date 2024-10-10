import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExternalLink from "../components/ExternalLink";

function Work() {
  //grab page id from url
  let { id } = useParams();

  //date for api call
  const restPath =
    "http://localhost/portfolio/wp-json/wp/v2/portfolio_work/" + id + "?_embed";
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
      {/* hero image */}
      {isLoaded ? (
        <img
          src={
            restData._embedded["wp:featuredmedia"][0].media_details.sizes.full
              .source_url
          }
        />
      ) : (
        <h2>Loading</h2>
      )}
      {/* title */}
      {isLoaded ? <h1>{restData.title.rendered}</h1> : <h1>Loading</h1>}
      {/*external links */}
      {isLoaded ? (
        <ExternalLink
          url={restData.acf.github_link.url}
          title={restData.acf.github_link.title}
          img="/github.svg"
        />
      ) : (
        <p>Loading...</p>
      )}
      {isLoaded ? (
        <ExternalLink
          url={restData.acf.live_site_link.url}
          title={restData.acf.live_site_link.title}
          img="/arrow-right-circle.svg"
        />
      ) : (
        <p>Loading...</p>
      )}
      {/*content */}
      {isLoaded ? (
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
        ></div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default Work;
