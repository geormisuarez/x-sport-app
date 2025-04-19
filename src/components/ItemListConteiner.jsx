import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"

const ItemListConteiner = (props) => {
    const [products, setProducts]= useState ([])

    useEffect(()=>{
        getProducts ()
        .then((res)=> setProducts(res))
        .catch((error)=> console.error(error))
    }, [])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
            
        </div>
    )
}

export default ItemListConteiner