import React from "react";
import {Link} from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className={'navbar mb-4'}>
      <div className="container">
      <Link to="/" className="customHeader navbar-brand">
        Rick & Morty <span className="text-primary">Character WiKi</span>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar; 