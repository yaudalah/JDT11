import React from "react";
import { useState } from "react";

const CounterAdvance = () => {
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <div>Counter Advance</div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Click</button>
    </>
  );
};

export default CounterAdvance;
