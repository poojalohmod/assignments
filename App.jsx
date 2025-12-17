import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        This is a colored div
      </div>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
}

export default ColorToggle;



