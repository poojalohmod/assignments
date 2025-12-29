import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered"); // Debug log

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h2>Heavy UI Section</h2>
      <p>This component simulates a heavy UI.</p>
    </div>
  );
}

// ✅ Wrapped with React.memo to prevent re-renders
export default React.memo(HeavyComponent);
