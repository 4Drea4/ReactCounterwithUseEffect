import React, { useState , useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [inputText, setInputText] = useState(1);

  //Assistance from Ervin
  useEffect(() => {
    setHistory((prev) => [...prev, count]
  )}, [count]);

  const handleClick = () => {
    setCount((prevCount) => {
      const spaghetti = prevCount + inputText
      setHistory(history => [...history,spaghetti] );//no stale use the newest verstion of history
    return spaghetti;
}) } ;

  const handleDecrementClick =() => {
    setCount((prevCount) => {
      const rigatoni = prevCount - inputText
      setHistory(history => [...history,rigatoni] ); //history is the name of the array of numbers and adding rigatoni to the end of the array of numbers
      return rigatoni;
    }
    );

  }


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Increment </button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick = {()=> setCount(0)}>Reset</button>

      <div className='Input-value'>
      <input 
      value={inputText}
      onChange={(e) => setInputText(Number(e.target.value))}
   
        />
          {/* <p>Click History: {history}</p> */}
          <ul>
           {history.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      
          </div>
    </div>
  );
}

//useeffect



// useEffect(() => {
//      console.log("Count Changed", Counter);
  
//   return()=> {
//        console.log("Stop running");
//   };
//    }, [Counter]);

//dependencies
//
