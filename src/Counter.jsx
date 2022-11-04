import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    count = count + 1;
    console.log(count);
  }

  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Click</button>
    </>
  );
};

export default Counter;
