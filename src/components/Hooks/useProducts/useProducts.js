import {useState,useEffect} from 'react'

const useProduct=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // return korte hobe array jehetu tai array hishabe
    return [products,setProducts];
}
export default useProduct;