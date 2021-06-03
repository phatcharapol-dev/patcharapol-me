import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Dropdown from "./components/Dropdown/Dropdown";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import Home from "./pages/Home";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <ThemeProvider>
        <Nav toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
