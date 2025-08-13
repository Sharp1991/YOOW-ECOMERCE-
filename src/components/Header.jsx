import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header>
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-main">Yoow</Link>
          <div className="logo-tagline">ECHOES FROM THE HILLS</div>
        </div>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/traditional">Traditional</Link></li>
            <li><Link to="/category/northeast" className="active">Northeast Fashions</Link></li>
            <li><Link to="/category/handicrafts">Handicrafts</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/cart" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
