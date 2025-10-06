import React, { useState , useEffect } from "react";
import Section_heading from "./Section_heading";
import Grid from "./Grid";

const Inner2_section = ({ box }) => {
  const [isvisible , setVisible] = useState(true);
  const [last , setLast] = useState(3);

  const visibleImage = box?.url_images?.slice(0, last);
 useEffect(()=>{
      if(box?.url_images && visibleImage.length >= box?.url_images.length){
           setVisible(false)
      }else{
        setVisible(true);
      }
 },[visibleImage, box?.url_images])

  

  const handle = () =>{
       setLast((prev)=>prev+3)
  }
  //   const image = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ_ocfo0hdvECHwzNFGYFnr5CRzyRPbiI_Q&s",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ_ocfo0hdvECHwzNFGYFnr5CRzyRPbiI_Q&s",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ_ocfo0hdvECHwzNFGYFnr5CRzyRPbiI_Q&s",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ_ocfo0hdvECHwzNFGYFnr5CRzyRPbiI_Q&s",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ_ocfo0hdvECHwzNFGYFnr5CRzyRPbiI_Q&s",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ_ocfo0hdvECHwzNFGYFnr5CRzyRPbiI_Q&s",
  // ];
  return (
    <div style={{ marginBottom : '40px' }}>
      <Section_heading props={"Travellers' stories"} />

      <Grid props={visibleImage}/>
      {isvisible && 
       <div className="Inner2_section_btn">
        <a href="#" onClick={(e) => (handle() , e.preventDefault())}>
          Load more
        </a>
      </div>
}
     
    </div>
  );
};

export default Inner2_section;
