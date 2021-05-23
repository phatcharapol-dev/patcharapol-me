
import NavItem from './NavItem/NavItem';

function Nav( props ) {
    return (
       
        
        <nav className="md:px-12 px-6 flex items-center justify-between w-full bg-opacity-0 h-16 font-mono fixed" role="navigation">            
                <div className="pr-2">
                    <span className="font-bold text-white text-2xl">N</span>
                </div>
                <div className="block cursor-pointer md:hidden text-green-500" onClick={props.toggle}>                    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>               
                </div>
                <div className="md:block hidden">                    
                                <NavItem link='/' exact>Home</NavItem>
                                <NavItem link='/about'>About</NavItem>
                                <NavItem link='/skill'>Skill</NavItem>                                
                                <NavItem link='/portfolio'>Portfolio</NavItem>
                                <NavItem link='/contact'>Contact</NavItem>
                </div>
        </nav>
        
    )
}

export default Nav;
