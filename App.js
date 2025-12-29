import React, { useState, Suspense, lazy } from "react";

// Lazy load the heavy child component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>React.memo & Lazy Loading Demo</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      {/* Lazy load with Suspense */}
      <Suspense fallback={<div>Loading heavy component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

