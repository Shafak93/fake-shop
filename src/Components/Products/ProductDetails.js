import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from './Products';
import { useParams } from "react-router-dom";
import './ProductDetails.css'
import Rating from '@mui/material/Rating/Rating';

const ProductDetails = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    useEffect( ()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const {title, image,price,description,category,rating}= product
    return (
        <div className=' mt-5 border rounded '>
            <div className='row cardSection'>
            <div className='col-md-6 imgSection'>
                <img className='p-5' src={image} alt={title} />
            </div>
            <div className=' col-md-6' style={{width: '400px'}}>
                    <div className='mt-3'>
                    <h4 className='fw-bolder'>{title}</h4>
                    <p>{description}</p>
                    <p>Category: {category}</p>
                    <h3 className='mt-3 text-danger'>Price : $ {price}</h3>
                    <div>
                        <p className='fw-bold'>Rating : {rating?.rate}</p>
                        <p>Reviews : {product.rating?.count}</p>
                    </div>
                    <div class="sizes mt-3">
                                <h6 class="text-uppercase">Size</h6> 
                                <label class="radio"> <input type="radio" name="size" value="S" checked /> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L" /> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL" /> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL" /> <span>XXL</span> </label>
                            </div>
                    <div className='d-flex my-3'>
                    <button className='me-3 btn2'> Buy Now
                        <span></span>
                    </button>
                    <button className='btn2'> Add to cart
                        <span></span>
                    </button>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;