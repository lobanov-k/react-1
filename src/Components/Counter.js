import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <div className="count">
        <div>{count}</div>
        <button onClick={handleInc}>+1</button>
      </div>
    </div>
  );
};
