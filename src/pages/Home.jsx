import React from "react";
import Contact from "../components/Contact";
import FrontPage from "../components/FrontPage";
import Gallery from "../components/Gallery";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <>
      <FrontPage />
      <Menu />
      <Contact />
      <Gallery />
    </>
  );
};

export default Home;
