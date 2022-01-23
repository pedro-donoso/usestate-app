import React, {useState} from 'react'

const initialProduct = {
  title: "Título único",
  description: "Descripción",
}

const ProductApp=()=>{
  const [product, setProduct]=useState(initialProduct);

  const updateProduct=(property, value)=>{
    setProduct({
      ...product,
      [property]: value
    })
  }

  return (
    <div className='container mx-2'>
    <button onClick={()=>updateProduct("description", "Descripción actualizada")} className='btn btn-sm btn-primary my-2'>
      Actualizar sólo Descripción
    </button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <h4>Vista previa:</h4>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      <hr/>
    </div>
  )
}

export default ProductApp
