import React,{useState,useEffect} from 'react';
import Nav from './components/Nav/Nav';
import Routing from './components/Routing/Index';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const [isTop,setIsTop] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  

  useEffect( () => {
    setIsOpen(false);
  },[])

  useEffect( () => {
    console.log('test')
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setIsTop(true);
      }else{
        setIsTop(false);
      }
    };
    console.log(isTop);
  });

  return (
    <>
      <Nav isTop={isTop} toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routing/>
      
      
    </>
    
  );
}

export default App;
