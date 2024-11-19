/*this file was created because the cartCount is located in the navbar so it uses navbar and isolates it from the rest */

import React from 'react';
import shoppingbag from "./assets/shopping-bag.png"

export default function Navbar({ cartCount }) {
  return (
    <div className='nav-bar'>
      <a href='#'>Home</a>
      <a href='#'>Shop Now</a>
      <a href='#'>
        <div className="cart-icon">
          <img src={shoppingbag} alt='shopping-cart' className="icon-style" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </a>
    </div>
  );
}
