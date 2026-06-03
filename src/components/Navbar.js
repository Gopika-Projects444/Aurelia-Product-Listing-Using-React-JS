import React from "react";

function Navbar({ count }) {
  return (
    <nav className="navbar">
      <h2>Aurelia Product Store</h2>
      <div>🛒 {count}</div>
    </nav>
  );
}

export default Navbar;