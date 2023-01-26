import React from "react";
import About from "../components/About";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Presentation />
      <Projects />
      <About />
    </>
  );
}

export default Home;