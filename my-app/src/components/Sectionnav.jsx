import React, { useContext ,useEffect } from "react";
import "../style/Sectionnav.css";
import { ImageContext } from "./ImageContext";
const Sectionnav = ({ props = [], onSelect, active }) => {
  const { Scroll_data } = useContext(ImageContext);
  // console.log(props)
 
  Scroll_data(props[0])
  const handleClick = (element) => {
    if (Scroll_data) {
      Scroll_data(element);
      // console.log("working");
    }
  };
  return (
    <ul className="tourism_list">
      {props.map((element, index) => (
        <li className="list1" key={index}>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              onSelect(element.topic_category , element.type , index);
              handleClick(element);
              // console.log(element)
            }}
            style={
              active === index
                ? { color: "white", backgroundColor: 'rgba(7, 5, 5, 0.9)' }
                : { color: "black"  ,   backgroundColor:'#d3d3d380'}
            }
          >
            {element.topic_category}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sectionnav;
