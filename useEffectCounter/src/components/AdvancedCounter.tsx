import React, {useState , useEffect } from 'React';


export default function AdvancedCounter (){
const [count, setCount] = useState(0);


const handleClick = () => {
    setCount((prevCount) =>
 => prevCount + 1);
};

return(
<div>
    <p>Current Count: {count}</p>
    <button onClick={handleClick}>Increment</button>
</div>
);


}