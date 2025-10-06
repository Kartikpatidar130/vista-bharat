import "../style/style.css";
import img1 from "../Images/download.png";
import icon1 from "../svg_icons/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import icon2 from "../svg_icons/map_search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import icon3 from "../svg_icons/favorite_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import icon4 from "../svg_icons/menu-duo-md-svgrepo-com.svg";
import icon5 from "../svg_icons/move-to-the-next-page-symbol-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./Search";
import Searchcontent from "./Searchcontent";
import icon6 from "../svg_icons/cross-svgrepo-com.svg";

const Navbar = ({ handle, Style_nav, active }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState({ display: "none" });
  const [navDisplay, setNavDisplay] = useState({ display: "block" });
  const [sideDisplay, setSideDisplay] = useState({ display: "none" });
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollHidden, setScrollHidden] = useState(false);
  const [loading , setLoading] = useState(false)
  
 
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      
      if (!mobile) setDisplay({ display: "none" });
      if(mobile) setSideDisplay({display: "none"})
      setWindowWidth(window.innerWidth);
      
     setScrollHidden(false);
    const html = document.documentElement;
    if (scrollHidden === false) {
       html.classList.remove("hide-scroll"); 
    } else {
       html.classList.add("hide-scroll");
    }
    
    setLoading(false)
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handler = () => {
    setDisplay({ display: "none" });
    const html = document.documentElement;
    setScrollHidden(false);
     if (!scrollHidden) {
      html.classList.add("hide-scroll"); 
    } else {
      html.classList.remove("hide-scroll");
    }
    setSideDisplay({display:"none"});
    change("");
  };

  const toggleDisplay = () => {
     const html = document.documentElement;
      if (!scrollHidden) {
      html.classList.add("hide-scroll"); 
    } else {
      html.classList.remove("hide-scroll");
    }
    setScrollHidden(!scrollHidden);
    change("");
    setDisplay((prev) => {
      if (isMobile) {
        return { display: prev.display === "none" ? "flex" : "none" };
      } else {
        return { display: "none" };
      }
    });
  };
  const  Page = () => {
     const html = document.documentElement;
      if (!scrollHidden) {
      html.classList.add("hide-scroll"); // hide scrollbar
    } else {
      html.classList.remove("hide-scroll"); // show scrollbar
    }
    setScrollHidden(!scrollHidden);

     setSideDisplay((prev) => {
      if (!isMobile) {
        return { display: prev.display === "none" ? "block" : "none" };
      } else {
        return { display: "none" };
      }
    });
  };

  // const togglesearch = () => {
  //   setDisplay((prev) => {
  //     if (!isMobile) {
  //       return { display: prev.display === "none" ? "flex" : "none" };
  //     } else {
  //       return { display: "none" };
  //     }
  //   });
  // };

  const change = (newvalue) => {
    setValue(newvalue);
    setSearch(newvalue);
    
    
    if (newvalue.length > 0) {
      setLoading(true)
      setNavDisplay((prev) => ({
        display: "none",
      }));
    } else {
      setNavDisplay(() => ({
        display: "block",
      }));
    }
  };

  useEffect(() => {
    const fetch_data = async () => {
      // console.log(value)
      // console.log(search)
      try{
      await fetch(`http://192.168.43.69:8000/api/subcategory?name=${value}`)
        .then((Response) => {
          // console.log(Response.ok);
          // console.log(Response.status);
          return Response.json();
        })
        .then((data) => {
          setPlaces(data);
          // console.log(data)
          // console.log(data.response[0])
        });
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }

    };
    fetch_data();
  }, [value]);
  

  // const results = !search.trim()
  //   ? []
  //   : places?.response?.filter((category) =>
  //       (category?.name || "").toLowerCase().includes(search.toLowerCase())
  //     );
  const results = !search.trim()
  ? []
  : Array.isArray(places?.response)
  ? places.response.filter((category) =>
      (category?.name || "").toLowerCase().includes(search.toLowerCase())
    )
  : [];
// console.log(scrollHidden)
// console.log(loading)

  return (
    <nav className="nav">
      <img className="icon_menu" src={icon4} alt="" onClick={toggleDisplay} />
      <div className="logo">
        <img src={img1} alt="logo" />
        <p> Bharat vista</p>
      </div>
      <ul className="ul_list">
        <li className="list">
          <NavLink
            to="/"
            style={{
              background:
                active === "Home"
                  ? "linear-gradient(to bottom, rgba(250, 250, 246, 1), rgba(6, 111, 249, 0.49))"
                  : "",
            }}
            onClick={() => {
              handle();
              Style_nav("Home");
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="list">
          <NavLink
            to="/places-to-go"
            style={{
              background:
                active === "Places to go"
                  ? "linear-gradient(to bottom, rgba(250, 250, 246, 1), rgba(6, 111, 249, 0.49))"
                  : "",
            }}
            onClick={() => {
              handle();
              Style_nav("Places to go");
            }}
          >
            Places to go
          </NavLink>
        </li>
        <li className="list">
          <NavLink
            to="/type-of-tourism"
            style={{
              background:
                active === "Type of Tourism"
                  ? "linear-gradient(to bottom, rgba(250, 250, 246, 1), rgba(6, 111, 249, 0.49))"
                  : "",
            }}
            onClick={() => {
              handle();
              Style_nav("Type of Tourism");
            }}
          >
            Type of Tourism
          </NavLink>
        </li>
        <li className="list">
          <NavLink
            to="/things-to-go"
            style={{
              background:
                active === "Things to go"
                  ? "linear-gradient(to bottom, rgba(250, 250, 246, 1), rgba(6, 111, 249, 0.49))"
                  : "",
            }}
            onClick={() => {
              handle();
              Style_nav("Things to go");
            }}
          >
            Things to go
          </NavLink>
        </li>
        <li className="list">
          {/* <NavLink
            to="/plan-your-trip"
            style={{
              background:
                active === "Plan Your trip"
                  ? "linear-gradient(to bottom, rgba(250, 250, 246, 1), rgba(6, 111, 249, 0.49))"
                  : "",
            }}
            onClick={() => {
              handle();
              Style_nav("Plan Your trip");
            }}
          >
            Plan Your trip
          </NavLink> */}
        </li>
      </ul>
      <div className="icon">
        <img className="icon_c" src={icon2} alt=""  onClick = {()=>alert("This feature currently not available")}/>
        {/* <img className="icon_c" src={icon3} alt="" onClick = {()=>alert("This feature currently not available")}/> */}
        <img
          className="icon_c search_icon"
          src={icon1}
          alt=""
          onClick={Page}
        />
      </div>

      <div className="sideSearch" style={sideDisplay}>
        <img className="sideSearch_cross" 
          src={icon6}
          alt=""
          onClick={()=>{
               Page() ;
               change("");
              }
          }
        />
        <Search change={change} value={value} className="search_bar" />
        {/* <div style={{overflowY:"auto" , maxHeight:"90%"}}> */}
        <Searchcontent
          windowWidth={windowWidth}
          results={results}
          search={search}
          handler={handler}
          loading = {loading}
          
        />
        {/* </div> */}
      </div>

      <ul className="ul_list2" style={display}>
        <Search change={change} value={value} className="search_div" />
        <div className="contain_div" style={navDisplay}>
          <NavLink to="/" className="inner_div" onClick={toggleDisplay}>
            <li className="list2">
              <button className="list2tag" onClick={() => handle()}>
                Home
              </button>
            </li>
            <img src={icon5} alt="not" />
          </NavLink>
          <NavLink
            to="/places-to-go"
            className="inner_div"
            onClick={toggleDisplay}
          >
            <li className="list2">
              <button className="list2tag"  onClick={() => handle()}>
                Places to go
              </button>
            </li>
            <img src={icon5} alt="not" />
          </NavLink>
          <NavLink
            to="/type-of-tourism"
            className="inner_div"
            onClick={toggleDisplay}
          >
            <li className="list2">
              <button className="list2tag" onClick={() => handle()}>
                Type of Tourism
              </button>
            </li>
            <img src={icon5} alt="not" />
          </NavLink>
          <NavLink
            to="/things-to-go"
            className="inner_div"
            onClick={toggleDisplay}
          >
            <li className="list2">
              <button className="list2tag" onClick={() => handle()}>
                Things to go
              </button>
            </li>
            <img src={icon5} alt="not" />
          </NavLink>
          {/* <NavLink
            to="/plan-your-trip"
            className="inner_div"
            onClick={toggleDisplay}
          >
            <li className="list2">
              <a href="#" onClick={() => handle()}>
                Plan Your trip
              </a>
            </li>
            <img src={icon5} alt="not" />
          </NavLink>*/}
         </div> 

         <Searchcontent
          windowWidth={windowWidth}
          results={results}
          search={search}
          handler={handler}
          loading = {loading}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
