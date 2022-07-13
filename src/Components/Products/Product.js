import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({product}) => {
    const {id,title, image,price,description}= product
    return (
        <div className='col-md-4 '>
            <Card className='mt-3 shadow' style={{ height: '32rem' }}>
                
            <Card.Img className='mx-auto' style={{width: '200px', height:'18rem'}} variant="top" src={image} />
            <Card.Body className='text-center'>
                <Card.Title>{title}</Card.Title>
                <p>Price : ${price}</p>
            </Card.Body>
            
            <button className='btn btn-primary '>Details</button>
            
            </Card>
        </div>
    );
};

export default Product;