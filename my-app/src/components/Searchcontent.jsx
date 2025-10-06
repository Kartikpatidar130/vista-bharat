import React, { useContext } from "react";
import { ImageContext } from "./ImageContext";
import Lottie from "lottie-react";
import animationData from "../Trail loading.json";

const Searchcontent = ({ windowWidth, results, search, handler, loading }) => {
  const { Image_data } = useContext(ImageContext);
  // console.log(results);
  return (
    <div className="searchContent">
      {loading ? (
       <div className="loader-animation">
    <Lottie
      animationData={animationData}
      loop
      autoplay
    />
  </div>
      ) : (
        <>
          {results && results.length > 0
            ? results?.map((ele, index) => {
                const sliceLength = windowWidth > 500 ? 200 : 100;
                const visiblePara =
                  ele.introduction.length > sliceLength
                    ? ele.introduction.slice(0, sliceLength) + "..."
                    : ele.introduction;
                // console.log(ele);
                return (
                  <div
                    className="search_list"
                    key={index}
                    onClick={() => {
                      Image_data(ele);
                      handler();
                    }}
                  >
                    <div className="img_box">
                      <img src={ele.url_images[0]} alt="" />
                    </div>
                    <div className="side_div">
                      <h1>{ele.name}</h1>
                      <p>{visiblePara}</p>
                      <a>Read more</a>
                    </div>
                  </div>
                );
              })
            : search.length > 0 && <p className="found">No match found</p>}
        </>
      )}
    </div>
  );
};

export default Searchcontent;
