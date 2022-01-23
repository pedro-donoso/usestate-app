import React, {useState} from 'react'

const ErrorApp = () => {

  const [error, setError ]=useState("");

  return (
    <div className='mx-3'>
    <button onClick={()=>setError("Error desde la API")} className='btn btn-sm btn-danger mb-3'>
    Mostrar Error
    </button>
    <button onClick={()=>setError("Credenciales incorrectas")} className='btn btn-sm btn-dark mx-4 mb-3'>
    Otro Error
    </button>
    <button onClick={()=>setError("")} className='btn btn-sm btn-success mb-3'>
    Proceso exitoso
    </button>
      {error && <h1>{error}</h1>}
    </div>
  )
}

export default ErrorApp
