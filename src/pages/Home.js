import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import FixedSocial from "../components/FixedSocial";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Presentation />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <FixedSocial />
    </>
  );
}

export default Home;