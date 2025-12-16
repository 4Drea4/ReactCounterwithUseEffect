import React, { useState , useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [inputText, setInputText] = useState(1);
  const [isSaving, setSaving] = useState(false);
  const [isSaved, setSaved] = useState(false);



  //Assistance from Patrice
  useEffect(() => {
    localStorage.setItem("countKey" , JSON.stringify(count))
    console.log('ravioli');
    setTimeout(()=>{setSaving(false)} , 2000)
    
  

  }, [count, isSaving ]);//watching count
  

  //events

  const reset = () =>{
    setCount(0)
    setHistory([])
  }

  const handleClick = () => {
    setSaving(true); //saving but need to turn it false intermitently.
    setCount((prevCount) => {
      const spaghetti = prevCount + inputText
      setHistory(history => [...history,spaghetti] );//no stale use the newest verstion of history
    return spaghetti;
}) } ;

  const handleDecrementClick =() => {
    setSaving(true); //saving but need to turn it false intermitently.
    setCount((prevCount) => {
      const rigatoni = prevCount - inputText
      setHistory(history => [...history,rigatoni] ); //history is the name of the array of numbers and adding rigatoni to the end of the array of numbers
      return rigatoni;
    }
    );

  }


  return (
    <div className='countercontainer'>
      <h1 className='title'> Counter</h1>
      <p className='currentcount'>Current Count: {count} </p>

      <div className='buttoncontainer'>
      <button className='button' onClick={handleClick}>Increment </button>
      <button  className="button" onClick={handleDecrementClick}>Decrement</button>
      <button className="button" onClick = {reset}>Reset</button> 
      </div>

      <div className='Input-value'>
      <label>Step Value: </label>
      <input 
      className="input"
      value={inputText}
      onChange={(e) => setInputText(Number(e.target.value))}
   
        />
          {/* <p>Click History: {history}</p> */}
          <ul>
           {history.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
          {isSaving &&    <div>{"saving..."}</div>} 
    {/* is saving truthy or falsy no? then display saving... */}
      
          </div>
    </div>
  );
}

