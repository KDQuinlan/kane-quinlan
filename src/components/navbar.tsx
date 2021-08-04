import './styles/navbar.css';
import { HeaderTitle, NavContainer } from './styles/navbarComponents';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavContainer>
      <div className="titleContainer">
        <HeaderTitle>
          <Link className="navButton" to="/">
            Kane Quinlan
          </Link>
        </HeaderTitle>
      </div>
      <nav className="listContainer">
        <ul className="navList">
          <li><Link className="navButton" to="/about">ABOUT</Link></li>
          <li><Link className="navButton" to="/cv">CV</Link></li>
          <li><Link className="navButton" to="/projects">PROJECTS</Link></li>
          <li><Link className="navButton" to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </NavContainer>
  );
}

export default Navbar;
