import SwitchToggle from "../SwitchToggle/SwitchToggle";
import NavItem from "./NavItem/NavItem";

function Nav(props) {
  return (
    <nav className={`nav`} role="navigation">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* <span className="logo">{`< pcrpt />`}</span> */}
          <div
            className="block cursor-pointer md:hidden text-blue-main text-lg"
            onClick={props.toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="md:block hidden">
            <NavItem goto="hero">Home</NavItem>
            <NavItem goto="about">About</NavItem>
            <NavItem goto="experience">Experience</NavItem>
            <NavItem goto="skills">Skills</NavItem>
            <NavItem goto="portfolios">Portfolios</NavItem>
          </div>
          <SwitchToggle className="text-lg" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
