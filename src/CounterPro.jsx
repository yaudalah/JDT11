import React, { useState } from 'react'
import { useEffect } from 'react';

const CounterPro = () => {
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  
  useEffect(() =>{ // dijalankan setelah selesai render
    console.log(count);
  },[count])
  
  return (
    <>
      <div>Counter Pro</div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Click</button>
    </>
  );
}

export default CounterPro