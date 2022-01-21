import React, {useState} from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter=()=>{
    setCounter(counter+1)
  }

  return (
    <div>
    <button onClick={incrementCounter}>
      Incrementar Clicks
    </button>  
    <h1>Clicks:{counter}</h1>  
    <hr/>
    </div>
  )
}

export default CounterApp
