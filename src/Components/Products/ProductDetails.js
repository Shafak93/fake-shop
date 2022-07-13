import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from './Products';
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        const url = `https://fakestoreapi.com/products/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    
    const {title, image,price}= product
    return (
        <div>
            <h1>Product details of {productId}</h1>
            <p>{title}</p>
        </div>
    );
};

export default ProductDetails;