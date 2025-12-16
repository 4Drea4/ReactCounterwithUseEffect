import React, { useState , useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [inputText, setInputText] = useState(1);
  const [isSaving, setSaving] = useState("");
  const [isSaved, setSaved] = useState("");



  //Assistance from Patrice
  useEffect(() => {
    localStorage.setItem("countKey" , JSON.stringify(count))
    console.log('ravioli');
    setTimeout(()=>{setSaving("saving...")} , 2000)
    setTimeout(()=> {setSaving("")
      setSaved("saved...") , 1500
    }
  )

  }, [count, isSaving ]);//watching count
  
  const reset = () =>{
    setCount(0)
    setHistory([])
  }
  //events

  const handleClick = () => {
    setSaving("Saving..."); //saving but need to turn it false intermitently.
    setCount((prevCount) => {
      const spaghetti = prevCount + inputText
      setHistory(history => [...history,spaghetti] );//no stale use the newest verstion of history
    return spaghetti;
}) } ;

  const handleDecrementClick =() => {
    setSaving("Saving..."); //saving but need to turn it false intermitently.
    setCount((prevCount) => {
      const rigatoni = prevCount - inputText
      setHistory(history => [...history,rigatoni] ); //history is the name of the array of numbers and adding rigatoni to the end of the array of numbers
      return rigatoni;
    }
    );

  }


  return (
    <div>
      <p>Current Count: {count} </p>
      <button onClick={handleClick}>Increment </button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick = {reset}>Reset</button> 

      <div className='Input-value'>
      <label>Step Value: </label>
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
          {isSaving ?    <div> </div>: <div>{isSaving}</div>} 
    {/* is saving truthy or falsy no? then display saving... */}
      
          </div>
    </div>
  );
}

