import React, {useState} from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
    <button onClick={()=>setCounter(counter+1)}>
      Incrementar
    </button>  
    <h1>Clicks:{counter}</h1>  
    </div>
  )
}

export default CounterApp
