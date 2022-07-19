import React, { createContext, useEffect, useState } from 'react';
import Product from './Product';

export const ProductsContext = createContext([])

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products);
    return (
       
            <div className='mt-5'>
            <h1 className='text-center text-secondary'>Products</h1>
            <div className='row'>
           {
            products.map(product =>
                <ProductsContext.Provider value={product}>
            <Product key={product.id}></Product>
            </ProductsContext.Provider>
            )
           }
        </div>
        </div>
        
    );
};

export default Products;