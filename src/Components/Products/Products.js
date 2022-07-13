import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    console.log(products);
    return (
        <div>
            <h1 className='text-center text-secondary'>Products</h1>
            <div className='row'>
           {
            products.map(product =><Product key={product.id} product={product}></Product>)
           }
        </div>
        </div>
    );
};

export default Products;