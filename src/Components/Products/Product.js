import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ProductsContext } from './Products';
import { useNavigate } from "react-router-dom";
import './Product.css'

const Product = () => {
    const products = useContext(ProductsContext)
    const {id,title, image,price, rating}= products
    const navigate = useNavigate()
    const navigateToDetails = id =>{
        navigate(`/products/${id}`)
    }
    return (
        <div className=' cardBox col-md-6 col-lg-4 col-sm-1'>
            <Card className='mt-3 shadow' style={{ height: '30rem' }}>
            <Card.Img className=' mx-auto p-3' style={{width: '228px', height:'228px'}} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p className='mt-3 fs-3'>Price : ${price}</p>
                <div>
                    <p className='fw-bold text-danger'>Rating: {rating.rate}</p>
                </div>
            </Card.Body>
            <div className='text-center mb-4'>
                <button className='btn1' onClick={()=>navigateToDetails(id)}>Details</button>
            </div>
            </Card>
        </div>
    );
};

export default Product;