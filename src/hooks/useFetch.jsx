import { useState, useEffect } from "react"

const useFetch = (url)=> {
const [data, setData]= useState(null)
const [loading, setLoading]= useState(false)
const [error, setError]= useState(null)

useEffect(()=>{
    setLoading(true)
    fetch(url)
    .then(res=> res.json())
    .then((response)=> setData(response))
    .catch((err)=> setError(err))
    .finally(()=> setLoading(flase))
},[url])

return{data, loading, error}
}

export default useFetch