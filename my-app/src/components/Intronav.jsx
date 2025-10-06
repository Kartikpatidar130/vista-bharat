import React from "react";

const Intronav = ({ places, activeTab, setActiveTab }) => {
  // console.log(places);
  return (
    <div className="Intronav">
      {places.map((nav, index) => (
        <div key={index}>
          <button
            className="Intronav_item"
            onClick={() => setActiveTab(nav)}
            style={{
              color: activeTab === nav ?  'white' : 'black' ,
              backgroundColor : activeTab === nav ? 'rgba(7, 5, 5,0.9)' : 'rgba(211, 211, 211, 0.5)'
            }}
          >
            {nav}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Intronav;
