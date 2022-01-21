import React, {useState} from 'react'

const ErrorApp = () => {

  const [error, setError ]=useState("");

  return (
    <div>
      {error}
    </div>
  )
}

export default ErrorApp
