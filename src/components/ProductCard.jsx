import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div 
      className="product-img" 
      style={{ backgroundImage: `url('${product.image}')` }}
    >
      {product.tag && <div className="product-tag">{product.tag}</div>}
    </div>
    <div className="product-info">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="product-price">₹{product.price.toFixed(2)}</span>
      <button className="btn add-to-cart">Add to Cart</button>
    </div>
  </div>
);

export default ProductCard;
