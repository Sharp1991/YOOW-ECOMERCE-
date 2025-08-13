import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`}>
      <div 
        className="product-img" 
        style={{ backgroundImage: `url('${product.image}')` }}
      >
        {product.tag && <div className="product-tag">{product.tag}</div>}
      </div>
    </Link>
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="product-price">₹{product.price.toFixed(2)}</span>
      <button className="btn add-to-cart">Add to Cart</button>
    </div>
  </div>
);

export default ProductCard;
