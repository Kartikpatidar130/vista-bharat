import React , {useEffect,useContext} from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
// import Tourism from "./Tourism"

import Footer from "./Footer";

const Home = ({box , scroll_data }) => {
   return (
    <div className="home" >
      <Section1 box = {box} />
      <Section2 box = {box} scroll_data={scroll_data} />
      <Footer />
    </div>
  );
};

export default Home;
