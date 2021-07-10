import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Dropdown from "./components/Dropdown/Dropdown";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import Home from "./pages/Home";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  window.onscroll = () => {
    // Check Top Page
    if (window.pageYOffset === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  return (
    <>
      <ThemeProvider>
        <Nav isTop={isTop} toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
