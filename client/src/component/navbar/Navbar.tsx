import './navbar.scss';

function Navbar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">I am a booking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
