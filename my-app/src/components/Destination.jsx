import React ,{useState , useEffect , useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Section_heading from './Section_heading'
import { ImageContext } from './ImageContext';
const Destination = ({dest}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const {dest_info} = useContext(ImageContext);
  const navigate = useNavigate()
  // console.log(dest)

useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize); 
  return () => window.removeEventListener("resize", handleResize);
}, []);
  // console.log(dest)
  return  (
    <div className = "destination">
        {dest && dest.length > 0 && (
  <Section_heading props="Tourist Attraction" />
)}

        <div className = "inner-destination">
        {dest?.map((ele  , index)=>(
            <div className = "destiantion-item" key ={index}> 
                <div className='destination-image'><img src={ele.dest_img} alt="" /></div>
                <div className="destination-info">
                    <h1>{ele.dest_name}</h1>
                    <p>{width > 500 
    ? `${ele.dest_info.slice(0,400)}...` 
    : `${ele.dest_info.slice(0,150)}...`}
                    </p>
                    <button onClick = {()=>(dest_info(ele) , navigate("/Destination")) }>Read more</button>
                </div>
            </div>

        ))}

        </div> 
    </div>
  )
}

export default Destination
