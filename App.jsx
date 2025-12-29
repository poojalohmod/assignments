import React, { useState, useMemo, useCallback } from "react";

// Child Component
function ProductList({ products, onSelect }) {
  console.log("ProductList rendered"); // for debugging
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} onClick={() => onSelect(product)}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}

// Parent Component
export default function App() {
  const [counter, setCounter] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    // imagine a large array here
  ];

  // ✅ useMemo: only recompute when products change
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ useCallback: stable function reference
  const handleSelect = useCallback((product) => {
    alert(`Selected: ${product.name}`);
  }, []);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}

