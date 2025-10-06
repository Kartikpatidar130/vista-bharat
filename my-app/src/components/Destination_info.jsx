import React from 'react'
import {useNavigate} from "react-router-dom"
import "../style/Destination_info.css"
const Destination_info = ({dest}) => {
    // console.log(dest)
    const navigate = useNavigate()
  return (
    <div className="card">
      <button className="card-button" onClick={()=>{navigate("/")}}>Back</button>
      <div className="image-container">
        <img
          src={dest?.dest_img}
          alt={dest?.dest_name}
        />
      </div>
      <h1 className="card-title">{dest?.dest_name}</h1>
      <p className="card-text">
       {dest?.dest_info}
      </p>
    </div>
  )
}

export default Destination_info
