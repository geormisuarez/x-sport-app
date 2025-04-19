import React, {useEffect, useState} from 'react'



const ItemCount = ({stock}) => {
    const [count, SetCount]= useState(1)
    const [compra, SetCompra]= useState(false)
    
    useEffect(()=>{},[compra]
    )
    
    const compraProducto = () => {
        SetCompra(!compra)
    }
    //suma
    const sumar = () => {
        if(count < stock){
            SetCount(count + 1)
        }
        
    }
    //resta
    const resta = () => {
        if(count > 0){
            SetCount(count - 1)
        }
    }

  return (
    <div>
        <div>
        <button className='btn btn-danger' onClick={resta}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={compraProducto}>Agregar a Carrito</button>
    </div>
  )
}

export default ItemCount


