import React, { useEffect } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="navbar-wrapper flex py-2 dark:bg-black bg-white px-5 justify-between absolute w-full mt-auto">
      <div className="navbar-logo flex items-center gap-2">
        <img
          src={`${process.env.PUBLIC_URL}/coffeeicon.png`}
          alt="CoffeePower"
          className="navbar-logo-image w-12"
        ></img>
        <h1 className="navbar-title text-3xl text-brown-4">CoffeePower</h1>
      </div>
      <div className="navbar-menu flex gap-20 text-brown-4 items-center text-xl">
        <div className="navbar-menu-list flex gap-10  justify-center items-center [&>h2]:cursor-pointer">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Customers</h2>
          <h2>Buy</h2>
        </div>
        {/* <div className="navbar-theme-menu flex items-center gap-5 text-base justify-center">
          <h2 className="toggle-theme dark:text-white text-black cursor-pointer" onClick={toggleTheme}>
            {darkMode ? 'Light' : 'Dark'}
            </h2>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
