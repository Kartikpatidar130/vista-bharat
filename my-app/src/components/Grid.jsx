import React, { useMemo } from "react";

const Grid = ({ props }) => {
  return (
    <div className="grid_container">
      {props?.map((ele, index) => (
        <div className="grid_item" key={index}>
          <img src={ele} alt={`image-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
