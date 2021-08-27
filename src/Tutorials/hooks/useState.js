import { useState } from "react";
import "./index.css";

function UseState() {
  // const [count, setCount] = useState(() => 0);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");

  function incrementCount() {
    setCount((prevState) => {
      return prevState + 1;
    });
    setTheme("red");
  }

  function decrementCount() {
    setCount((prevState) => {
      return prevState - 1;
    });
  }
  return (
    <div className="simple">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default UseState;
