import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ products }) => {
  // Filter featured products
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Northeast Inspired Elegance</h1>
          <p>Discover the rich cultural heritage of Northeast India through our exquisite fashion collections</p>
          <a href="#collections" className="btn">Explore Collection</a>
        </div>
      </section>

      {/* Categories Section (Keep static for now) */}
      {/* ... existing categories code ... */}

      {/* Featured Products */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
