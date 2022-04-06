import {useState,useEffect} from 'react'

const useProduct=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
    },[])
    // return korte hobe array jehetu tai array hishabe
    return [products,setProducts];
}
export default useProduct;