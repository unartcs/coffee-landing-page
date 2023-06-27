import React, { useState } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Pages() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="pages-wrapper dark:bg-black bg-white relative flex flex-col
    justify-between gap-20">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero />
      <About/>
    </div>
  );
}

export default Pages;
