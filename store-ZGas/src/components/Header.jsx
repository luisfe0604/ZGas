import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/home" className='link-header'>
        <span>Z</span><small>GÁS</small>
      </Link>
      <nav className="nav">
        <ul>
          {/* <li><a href="/home">Página Inicial</a></li> */}
          {/* <li><a href="/">Sobre</a></li>
          <li><a href="/">Contato</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
