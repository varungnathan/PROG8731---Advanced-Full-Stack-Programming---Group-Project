import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/employees">Employee List</Link></li>
      <li><Link to="/create">Create Employee</Link></li>
      <li><Link to="/community">Employee Community</Link></li>
      <li><Link to="/community-details">Community Details</Link></li> {/* New Link */}
      <li><Link to="/recreation">Recreation</Link></li>
    </ul>
  </nav>
);

export default Navbar;
