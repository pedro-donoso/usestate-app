import React, {useState} from 'react'

const ConditionalApp = () => {
  const [condition, setCondition] = useState(true);
  return(
    <div className='mx-3'>
    <button onClick={()=>setCondition(!condition)} className='btn btn-sm btn-warning mb-3'>
      Cambiar True a False
    </button>

      {
        condition &&
        <h2>Éste mensaje sólo se ve en True</h2>
      
      } 

      <h2>El valor del Estado ahora: {condition.toString()}</h2>

      <hr/>
      
    </div>
  )
}

export default ConditionalApp