import React from "react";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <h4>₹{product.price}</h4>

      <button onClick={() => onAddToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;