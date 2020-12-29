import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = { textDecoration: 'none', color: 'white' };
  return (
    <div className="navbar-container">
      <div>
        <Link style={linkStyle} to="/">
          <h4 className="logo">StarWar Movies</h4>
        </Link>
      </div>
      <ul className="links">
        <Link style={linkStyle} to="/">
          <li className="nav-link">Movies</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
