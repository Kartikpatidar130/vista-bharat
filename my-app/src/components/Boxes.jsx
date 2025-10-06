import React, { useContext, useEffect , useState} from "react";
import "../style/Boxes.css";
import { NavLink } from "react-router-dom";
import { ImageContext } from "./ImageContext";

const Boxes = ({ props, Style_nav }) => {
  const token = localStorage.getItem('authToken')
  const { Image_data } = useContext(ImageContext);
  const [subcategory , setSubcategory] = useState([])
  // console.log(props.topic_category);
  // console.log(props.type);

  useEffect(() => {
   
    const fetchData = async () => {
      await fetch(
        `http://192.168.43.69:8000/api?topic_category=${props.topic_category}&type=${props.type}`,
        {
       method : "GET",
       headers: {
        "Authorization" : `Bearer ${token}`
       }}
      )
        .then((res) => {
          return res.json();
        })
        .then((value) => {
          setSubcategory(value.subcategory);
        });
    };
  fetchData()
  }, [props.topic_category, props.type]);

return (
  <div className="Boxes_container">
    {subcategory ?.map((box, index) => (
      <NavLink to="/" key={index}>
        <div
          className="Box"
          onClick={() => {
            // console.log(box);
            Image_data(box);
            Style_nav("Home");
          }}
        >
          {/* {console.log(box?.url_images[0])} */}
          <img src={box?.url_images[0]} alt="" />
          <div className="child_div"></div>
          <div className="parent_p">
            <p>{box.name}</p>
          </div>
        </div>
      </NavLink>
    ))}
  </div>
);
}

export default Boxes;
