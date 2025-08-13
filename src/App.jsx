import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('API error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>YOOW E-Commerce</h1>
      
      {loading ? (
        <p style={styles.loading}>Loading products...</p>
      ) : (
        <div style={styles.products}>
          {products.map(product => (
            <div key={product.id} style={styles.productCard}>
              <img 
                src={product.image} 
                alt={product.name}
                style={styles.productImage}
              />
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productPrice}>₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Mobile-friendly styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
    maxWidth: '100%',
    overflowX: 'hidden'
  },
  header: {
    textAlign: 'center',
    color: '#1a2a6c',
    marginBottom: '30px'
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px'
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '20px'
  },
  productCard: {
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '15px',
    textAlign: 'center'
  },
  productImage: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  productName: {
    margin: '10px 0 5px',
    fontSize: '16px'
  },
  productPrice: {
    color: '#b21f1f',
    fontWeight: 'bold',
    fontSize: '14px'
  }
};

export default App;
