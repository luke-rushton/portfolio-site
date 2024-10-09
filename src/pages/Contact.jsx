import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Contact() {
  //grab page id from url
  let { id } = useParams();

  //date for api call
  const restPath = "http://localhost/portfolio/wp-json/wp/v2/pages/42";
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
      {/* title */}
      {isLoaded ? <h1>{restData.title.rendered}</h1> : <h1>Loading</h1>}
      {/*external links */}

      {/*content */}
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

export default Contact;