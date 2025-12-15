import React, { useState , useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };
  const handleDecrementClick =() => {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Increment
      </button>
      <button onClick={handleDecrementClick}>Decrement</button>
    </div>
  );
}


//dependencies
// useEffect(() => {
//     console.log("Count Changed", Counter);

// return()=> {
//     console.log("Stop running");
// };
// }, [Counter]);
