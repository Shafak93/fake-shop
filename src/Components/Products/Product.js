import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ProductsContext } from './Products';
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
    const products = useContext(ProductsContext)
    const {id,title, image,price}= products
    const navigate = useNavigate()
    const navigateToDetails = id =>{
        navigate(`/products/${id}`)
    }
    return (
        <div className='col-md-4 '>
            <Card className='mt-3 shadow' style={{ height: '32rem' }}>
            <Card.Img className='mx-auto' style={{width: '200px', height:'18rem'}} variant="top" src={image} />
            <Card.Body className='text-center'>
                <Card.Title>{title}</Card.Title>
                <p>Price : ${price}</p>
            </Card.Body>
            <button onClick={()=>navigateToDetails(id)} className='btn btn-primary'>Details</button>
            </Card>
        </div>
    );
};

export default Product;