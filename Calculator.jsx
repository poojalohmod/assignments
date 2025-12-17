import { useState } from "react";

function Calculator() {
  // State for inputs, operation, and results
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  // Perform calculation
  const handleCalculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    let result = 0;

    if (operation === "Add") {
      result = n1 + n2;
    } else if (operation === "Subtract") {
      result = n1 - n2;
    } else if (operation === "Multiply") {
      result = n1 * n2;
    }

    // Append new result without replacing old ones
    setResults([...results, `${n1} ${operation} ${n2} = ${result}`]);
  };

  return (
    <div>
      <h2>Basic Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>
      <button onClick={handleCalculate}>Perform Action</button>

      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
