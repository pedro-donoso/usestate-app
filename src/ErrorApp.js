import React, {useState} from 'react'

const ErrorApp = () => {

  const [error, setError ]=useState("");

  return (
    <div className='mx-3'>
    <button onClick={()=>setError("Error desde la API")} className='btn btn-sm btn-danger'>
    Mostrar Error
    </button>
    <button onClick={()=>setError("Credenciales incorrectas")} className='btn btn-sm btn-dark mx-4'>
    Otro Error
    </button>
    <button onClick={()=>setError("")} className='btn btn-sm btn-success'>
    Proceso exitoso
    </button>
      {error && <h1>{error}</h1>}
    </div>
  )
}

export default ErrorApp
