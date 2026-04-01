import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';

function App() {
  // ✅ Cart state
  const [cart, setCart] = useState([]);

  // ✅ Cart open/close
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Add to Cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Remove from Cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // ✅ Update Quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // ✅ Toggle Cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // ✅ Total Items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app">
      <Header 
        cart={cart}
        totalItems={getTotalItems()}
        toggleCart={toggleCart}
      />

      <main className="main-content">
       {/* ✅ passing function */}
<ProductList 
  products={products} 
  onAddToCart={addToCart}
/>
      </main>
    </div>
  );
}

export default App;