import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Dropdown from "./components/Dropdown/Dropdown";
// import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isTop, setIsTop] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    setIsOpen(false);
    // setIsDarkMode(false);
  }, []);

  // useEffect(() => {
  //   window.onscroll = function () {
  //     if (window.pageYOffset === 0) {
  //       setIsTop(true);
  //     } else {
  //       setIsTop(false);
  //     }
  //   };
  // });

  return (
    <>
      <Nav
        // isTop={isTop}
        toggle={toggle}
        isDarkMode={isDarkMode}
        toggleMode={toggleMode}
      />
      <Dropdown isOpen={isOpen} toggle={toggle} isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode} />
      {/* <Switch>
        <Route
          path="/patcharapol-me"
          exact
          component={() => <Home isDarkMode={isDarkMode} />}
        />
        <Route path="/" component={() => <Home isDarkMode={isDarkMode} />} />
      </Switch> */}
    </>
  );
}

export default App;
