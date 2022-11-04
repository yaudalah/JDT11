import React, { useState } from 'react'

const CounterPro = () => {
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    console.log(count);
  };

    

  return (
    <>
      <div>Counter Pro</div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Click</button>
    </>
  );
}

export default CounterPro