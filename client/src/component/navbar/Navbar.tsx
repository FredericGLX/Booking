import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

function Navbar(): JSX.Element {
  const { state } = useContext(AuthContext);
  const { user } = state;

  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          <>
            <button className="navButton" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <div className="navItems">
            <Link to={'/login'}>
              <button className="navButton">Login</button>
            </Link>
            <Link to={'/login'}>
              <button className="navButton">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
