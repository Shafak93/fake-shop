import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from './Products';
import { useParams } from "react-router-dom";
import './ProductDetails.css'

const ProductDetails = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    useEffect( ()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const {title, image,price,description,category}= product
    return (
        <div className=' my-3 border rounded '>
            <div className='row cardSection'>
            <div className='col-md-6 imgSection'>
                <img className='p-5' src={image} alt={title} />
            </div>
            <div className=' col-md-6' style={{width: '400px'}}>
                    <div>
                    <h4 className='fw-bolder'>{title}</h4>
                    <p>{description}</p>
                    <p>Category: {category}</p>
                    <h3 className='mt-5 text-danger'>Price : $ {price}</h3>
                    <p>Rating : {product.rating?.rate}</p>
                    
                    <div class="sizes mt-5">
                                <h6 class="text-uppercase">Size</h6> 
                                <label class="radio"> <input type="radio" name="size" value="S" checked /> <span>S</span> </label> <label class="radio"> <input type="radio" name="size" value="M" /> <span>M</span> </label> <label class="radio"> <input type="radio" name="size" value="L" /> <span>L</span> </label> <label class="radio"> <input type="radio" name="size" value="XL" /> <span>XL</span> </label> <label class="radio"> <input type="radio" name="size" value="XXL" /> <span>XXL</span> </label>
                            </div>
                    <div className='d-flex mt-5'>
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