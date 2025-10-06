import React, { useEffect, useState } from "react";
import "../style/Section2.css";
import Sectionnav from "./Sectionnav";
import Boxes from "./Boxes";
import "../style/Section2.css";
import Inner_section from "./Inner_section";
import Inner2_section from "./Inner2_section";
import Text_area from "./Text_area";
import Destination from "./Destination";

const Section2 = ({ box, scroll_data }) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("authToken");
  // console.log(box)
  const dest = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s",
      heading: "tajmahal",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error possimus suscipit harum aspernatur, officiis dolore? Officiis maxime, hic nisi ipsum aspernatur aperiam placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut, pariatur voluptatibus quia odit praesentium ullam corporis blanditiis? Earum reprehenderit voluptates sapiente voluptas officia aliquid porro quae ad ea dolore.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s",
      heading: "tajmahal",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error possimus suscipit harum aspernatur",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s",
      heading: "tajmahal",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error possimus suscipit harum aspernatur, officiis dolore? Officiis maxime, hic nisi ipsum aspernatur aperiam placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut, pariatur voluptatibus quia odit praesentium ullam corporis blanditiis? Earum reprehenderit voluptates sapiente voluptas officia aliquid porro quae ad ea dolore.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s",
      heading: "tajmahal",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error possimus suscipit harum aspernatur, officiis dolore? Officiis maxime, hic nisi ipsum aspernatur aperiam placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut, pariatur voluptatibus quia odit praesentium ullam corporis blanditiis? Earum reprehenderit voluptates sapiente voluptas officia aliquid porro quae ad ea dolore.",
    },
  ];
  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        fetch(`https://bharatvista.onrender.com/api/dest?name=${box.name}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((value) => setData(value));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [box]);
  return (
    <div className="Section_mid_container">
      {/* <Sectionnav props={places} /> */}
      {/* <p style={{fontFamily: "P22Mackinac-Medium,Georgia,serif", fontSize:"50px",fontWeight:"500",textAlign:"center",margin:"10px",border:"2px solid red"}}>Guide to Delhi</p> */}
      <Text_area box={box} />
      <Destination dest={data} />
      <Inner_section scroll_data={scroll_data} />
      <Inner2_section box={box} />
    </div>
  );
};
export default Section2;
