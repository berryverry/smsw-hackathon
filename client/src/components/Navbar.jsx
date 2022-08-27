import { Link } from 'react-router-dom';
import '../styles/global.scss';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <div className="flex container">
        <Link to="/" className="text-2xl m-3">
          <a>Metaverse Project</a>
        </Link>
        <div className="flex absolute r-0">
          <Link to="/about" className="nav-button">
            About
          </Link>
          <Link to="/faq" className="nav-button">
            FAQ
          </Link>
          <Link to="/community" className="nav-button">
            Community
          </Link>
          <Link to="/signin" className="nav-button">
            Sign in
          </Link>
          <Link to="/signup" className="nav-button">
            Sign up
          </Link>
          <a className="nav-button">Log out</a>
          <Link to="/quiz" className="nav-button">
            Quiz
          </Link>
          <Link to="/play" className="nav-button">
            Play
          </Link>
          <Link to="/profile" className="nav-button">
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
