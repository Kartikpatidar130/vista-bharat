import "./style/style.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tourism from "./components/Tourism";
import Places from "./components/Places";
import Things from "./components/Things";
import { ImageContext } from "./components/ImageContext";
import { Routes, Route  , Navigate ,  useNavigate ,  useLocation} from "react-router-dom";
import Login from "./components/Login.jsx";
import Lottie from "lottie-react";
import animationData from "./Trail loading.json";
import Destination_info from "./components/Destination_info.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [loading, setLoading] = useState(true); 
  const token = localStorage.getItem("authToken");
  const [box, setBox] = useState();
  const [scrollcontain, setScrollContain] = useState([]);
  const [boxcontain, setBoxContain] = useState([]);
  const [scroll, setScroll] = useState();
  const [active, setActive] = useState("");
  const [dest, setDest] = useState();

  // console.log(token);

  // console.log(box);
  // console.log(scroll);
  // const { Image_data } = useContext(ImageContext);
  // console.log("hii");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchtourism = async () => {
      try{
      await fetch(
        "https://bharatvista.onrender.com/api/topic_category?type=place",
        options
      )
        .then((res) => {
          return res.json();
        })
        .then((value) => {
          // console.log(value.category[0]);
          // setScroll(value.category[0]);
          // setScrollContain(value.category[0]);
        });
      await fetch(
        "https://bharatvista.onrender.com/api?topic_category=states&type=place",
        options
      )
        .then((Response) => {
          // console.log(Response.ok);
          // console.log(Response.status);
          return Response.json();
        })
        .then((value) => {
          // console.log(value.subcategory[0]);
          setBox(value.subcategory[0]);
          setBoxContain(value.subcategory[0]);
        });
      }catch(err){
        console.error(err)
      }
      finally {
      setLoading(false)
    }
    };
    fetchtourism();
  }, []);

  const Style_nav = (ele) => {
    setActive(ele);
  };

  function Scroll_data(element) {
    // console.log(element);
    setScroll(element);
  }

  function Scroll_call(data) {
    // console.log(data);
    setBox(data);
  }

  function Image_data(box) {
    // console.log(box);
    setBox(box);
  }
  function dest_info(ele) {
    // console.log(ele);
    setDest(ele);
  }
  function handle() {
    // console.log(scrollcontain)
    setBox(boxcontain);
    setScroll(scrollcontain);
  }

  return (
      
      <div className="main-container">
        {loading ? (<div className = "loader-animation">
        <Lottie
          animationData={animationData}
          loop
          autoplay
        />
      </div>):
        (
          <ImageContext.Provider
            value={{ Image_data, Scroll_data, Scroll_call, dest_info }}
          >
            <Navbar handle={handle} Style_nav={Style_nav} active={active} />

            <ScrollToTop />
            <Routes>
               
              <Route
                path="/"
                element={<Home box={box} scroll_data={scroll}/>}
              />
              <Route
                path="/places-to-go"
                element={<Places Style_nav={Style_nav} />}
              />
              <Route
                path="/type-of-tourism"
                element={<Tourism Style_nav={Style_nav} />}
              />
              <Route
                path="/things-to-go"
                element={<Things Style_nav={Style_nav} />}
              />
              <Route
                path="/Destination"
                element={<Destination_info dest={dest}/>}
              />
              <Route path="/login" element={<Login />} />
              <Route
        path="*"
        element={<Navigate  to="/" replace />}
    />
            </Routes>
          </ImageContext.Provider>
        )
}
      </div>
  );
}

export default App;
