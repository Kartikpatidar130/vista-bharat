import React from 'react'
import icon1 from "../svg_icons/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import icon6 from "../svg_icons/cross-svgrepo-com.svg";
const Search = ({className , change , value}) => {
  return (
   <div className={className}>
          <img src={icon1} alt="" />
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e) => change(e.target.value)}
          />
          {value ? <img
            src={icon6}
            alt=""
            onClick={() => {
              change("");
            }}
          />: ""
        }
          
        </div>
  )
}

export default Search
