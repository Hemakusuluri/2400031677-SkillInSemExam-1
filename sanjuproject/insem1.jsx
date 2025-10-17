import React, { useState } from "react";

function ProductList() {
  const products = [
    { name: "Pen", price: 10, category: "Stationery" },
    { name: "Notebook", price: 50, category: "Stationery" },
    { name: "Backpack", price: 800, category: "Bags" },
    { name: "Laptop", price: 55000, category: "Electronics" },
    { name: "Headphones", price: 1500, category: "Electronics" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛍️ Product List with Category Filter</h2>

      {/* Step 4: Category filter dropdown */}
      <label style={{ fontWeight: "bold", marginRight: "10px" }}>
        Choose Category:
      </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px" }}
      >
        <option value="All">All</option>
        <option value="Stationery">Stationery</option>
        <option value="Bags">Bags</option>
        <option value="Electronics">Electronics</option>
      </select>

      <ul style={{ marginTop: "20px" }}>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> — ₹{product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
