import React,{useState,useEffect} from 'react';
import Nav from './components/Nav/Nav';
import Routing from './components/Routing/Index';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("toggle")
  }

  useEffect( () => {
    setIsOpen(false);
    console.log("useEffect");
  },[])

  return (
    <>
      <Nav toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routing/>
      
      
    </>
    
  );
}

export default App;
