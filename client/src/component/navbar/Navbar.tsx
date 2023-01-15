import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function Navbar(): JSX.Element {
  const { state } = useContext(AuthContext);
  const { user } = state;

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Register</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
