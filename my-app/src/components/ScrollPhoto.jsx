import React ,{useContext , useEffect , useState} from 'react'
import "../style/Section2.css"
import {ImageContext} from "./ImageContext";
import { NavLink } from 'react-router-dom';

  const ScrollPhoto = ({ scroll_data }) => {
    const [subcategory , setSubcategory] = useState([])
    const {Scroll_call} = useContext(ImageContext)
      const { Image_data } = useContext(ImageContext);
      // console.log(scroll_data)
   
    useEffect(() => {
          if (!scroll_data?.topic_category || !scroll_data?.type) return;
          const fetchData = async () => {
            await fetch(
              `https://bharatvista.onrender.com/api?topic_category=${scroll_data.topic_category}&type=${scroll_data.type}`
            )
              .then((res) => {
                return res.json();
              })
              .then((value) => {
                setSubcategory(value.subcategory);
              });
          };
    
          fetchData();
        },
        [scroll_data?.topic_category, scroll_data?.type]);

    const handleClick = (obj) => { 
    if (Scroll_call) {
      // console.log(obj)
      Scroll_call(obj);
    }
  }
  // console.log(subcategory)

  //  const names = Array.isArray(scroll_data?.names) ? scroll_data.names : [];
    
  return (
    <div className="ScrollPhoto_content">
      {subcategory?.map((obj, index) => (
        <NavLink to="/" key={index} onClick={(e) => {
              e.preventDefault()
              handleClick(obj)
              Image_data(obj)
              // console.log(obj)
              window.scrollTo(0,0);
            }}>
          <div className="ScrollPhoto_item">
            <img className="Scroll_img" src={obj?.url_images[0]} alt="" />
            <div className="Scroll_img_shadow"></div>
            <p className="Scroll_p">{obj?.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};



export default ScrollPhoto
