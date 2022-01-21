import React, {useState} from 'react'

const initialProduct = {
  title: "Titulo",
  description: "Descripción",
}

const ProductApp=()=>{
  const [product, setProduct]=useState(initialProduct);

  const updateProduct=(=>{
    setProduct({})
  })

  return (
    <div>
    <button onClick={updateProduct}>
      Update
    </button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <img src={product.image?product.medium} alt="product"/>
    </div>
  )
}

export default ProductApp
