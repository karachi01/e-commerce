import React from 'react';

export default function AddToCartButton({ onClick }) {
  return (
    <button className='add-to-cart' onClick={onClick}>Add to Cart</button>
  );
}
