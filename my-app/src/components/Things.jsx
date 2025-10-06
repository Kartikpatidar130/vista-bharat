import React, { useEffect, useState, useContext } from "react";
import "../style/Section2.css";
import Sectionnav from "./Sectionnav";
import Boxes from "./Boxes";
import "../style/Boxes.css";
import Lottie from "lottie-react";
import animationData from "../Trail loading.json";

const Tourism = ({ Style_nav }) => {
  // console.log(Style_nav);
  const [loading, setLoading] = useState(true);

  const [topicCategory, setTopicCategory] = useState([]);
  const [names, setNames] = useState({});
  const [active, setActive] = useState(0);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchtourism = async () => {
      try {
        await fetch("http://192.168.43.69:8000/api/topic_category?type=thing", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((Response) => {
            // console.log(Response.ok);
            // console.log(Response.status);
            return Response.json();
          })
          .then((value) => {
            setTopicCategory(value.category);
            setNames(value.category[0]);
            // Image_data(value[0].topic_categorys[0].names[0])
          });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchtourism();
  }, []);

  const Select = (topic_category, type, index) => {
    setNames({ topic_category, type });
    // console.log(names);
    setActive(index);
  };

  return (
    <div className="Section2_container">
      {loading ? (
        <div className="loader-animation">
          <Lottie animationData={animationData} loop autoplay />
        </div>
      ) : (
        <>
          <div className="container">
            <h1>Places to go</h1>
            <Sectionnav
              props={topicCategory}
              onSelect={Select}
              active={active}
              setActive={setActive}
            />
          </div>
          <Boxes props={names} Style_nav={Style_nav} />
        </>
      )}
    </div>
  );
};

export default Tourism;
