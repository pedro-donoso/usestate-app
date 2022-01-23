import React, {useState} from 'react';

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter=()=>{
    setCounter(counter+1)
  }

  return (
    <div className='mx-3'>
    <button onClick={incrementCounter} className='btn btn-sm btn-success mb-2'>
      Incrementar Clicks
    </button>  
    <h1>Clicks:{counter}</h1>  
    <hr/>
    </div>
  )
}

export default CounterApp
