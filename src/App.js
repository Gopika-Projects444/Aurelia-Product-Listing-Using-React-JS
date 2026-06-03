import React, { useState } from "react";
import products from "./data/products";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./styles/App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  // Add to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("");
  };

  // Search and filter 
  let filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" ||
        product.category === selectedCategory)
  );

  // Sort
  if (sortOrder === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOrder === "nameAZ") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortOrder === "nameZA") {
    filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar count={cart.length} />

      {/* Search */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Filter and Sort */}
      <FilterSort
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        resetFilters={resetFilters}
      />

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No products found
        </h2>
      ) : (
        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;