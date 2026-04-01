import React from 'react';
import '../styles/Header.css';

function Header({ totalItems }) {
  return (
    <header>
      <h1>Shop</h1>
      <div>Cart: {totalItems}</div>   // ✅ should use totalItems
    </header>
  );
}

export default Header;