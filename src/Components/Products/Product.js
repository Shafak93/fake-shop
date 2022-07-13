import React from 'react';

const Product = ({product}) => {
    const {id,title,price,description}= product
    return (
        <div>
            <h1>Title: {title}</h1>
            <h1>price: {price}</h1>
        </div>
    );
};

export default Product;