import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <header className="Header">
      <div className="logo">Mon Portfolio</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Accueil</Link></li>
          <li className="nav-item"><Link to="/about">À propos</Link></li>
          <li className="nav-item"><Link to="/projects">Projets</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
          <li className="nav-item"><Link to="/fun" className="fun-link">Fun</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
