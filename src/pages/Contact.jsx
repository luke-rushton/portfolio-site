import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentPlaceholder from "../components/ContentPlaceholder";

function Contact() {
  //grab page id from url
  let { id } = useParams();

  //date for api call
  const restPath = "https://lukerushton.com/IDlljioTsC/wp-json/wp/v2/pages/42";
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
        <div className="contact-page page-content">
          {/* hero image */}
          {/* title */}
          <h1>{restData.title.rendered}</h1>
          {/*external links */}

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

export default Contact;
