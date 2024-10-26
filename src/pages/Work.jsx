import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExternalLink from "../components/ExternalLink";
import { NavLink } from "react-router-dom";
import ContentPlaceholder from "../components/ContentPlaceholder";
import { useSpring, animated } from "react-spring";

function Work() {
  //grab page id from url
  let { id } = useParams();

  //date for api call
  const restPath =
    "https://lukerushton.com/IDlljioTsC/wp-json/wp/v2/portfolio_work/" +
    id +
    "?_embed";
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
        <animated.main className="work-page page-content" style={fadeIn}>
          <NavLink className="nav-button back-button" to={`/works/`}>
            <img src="/arrow-left.svg" />
          </NavLink>

          {/* hero image */}

          <img
            className="splash-img"
            src={
              restData._embedded["wp:featuredmedia"][0].media_details.sizes.full
                .source_url
            }
          />

          <section className="info-section">
            {/* title */}
            <h1>{restData.title.rendered}</h1>
            {/*external links */}
            <div className="external-links">
              <ExternalLink
                url={restData.acf.live_site_link.url}
                title={restData.acf.live_site_link.title}
                img="/globe.svg"
              />

              <ExternalLink
                url={restData.acf.github_link.url}
                title={restData.acf.github_link.title}
                img="/github.svg"
              />
            </div>
          </section>
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

export default Work;
