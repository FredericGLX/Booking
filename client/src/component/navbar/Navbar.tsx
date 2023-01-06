import './navbar.scss';
import { Link } from 'react-router-dom';

function Navbar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
