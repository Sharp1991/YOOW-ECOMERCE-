import React from 'react';

const Header = () => (
  <header>
    <div className="container header-container">
      <div className="logo-container">
        <div className="logo-main">Yoow</div>
        <div className="logo-tagline">ECHOES FROM THE HILLS</div>
      </div>
      
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/traditional">Traditional</a></li>
          <li><a href="/northeast" className="active">Northeast Fashions</a></li>
          <li><a href="/handicrafts">Handicrafts</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
