import React from "react";

const Section1 = ({box}) => {
  //  console.log(box)
    return (
    <div className="main_sec1" >
      <img
        src={box?.url_images[0]}
        alt="image"
        width="100%"
        height="100%"
      /> 
      <div className="main_sec1_text">
        <p className="main_sec1_text_p">
          <span className="main_sec1_text_p_span">
            “Every{" "}
          </span>
          journey tells a story, make yours in India”
        </p>
      </div>
  </div>
  );
};

export default Section1;
