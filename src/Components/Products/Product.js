import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ProductsContext } from './Products';
import { useNavigate } from "react-router-dom";
import './Product.css'

const Product = ({product}) => {
    const products = useContext(ProductsContext)
    const {id,title, image,price}= products
    const navigate = useNavigate()
    const navigateToDetails = id =>{
        navigate(`/products/${id}`)
    }
    return (
//         <section class="section-products col-md-6 col-lg-3 col-xl-4">
		
// 						{/* <!-- Single Product --> */}
						
// 								<div id="product-1" class="single-product">
// 										<div style={{backgroundImage: `url(${image})`, 
//                                         backgroundRepeat: 'no-repeat , center',
//                                         backgroundSize: '228px',
//                                         transition: 'all 0.3s'}} class="part-1">
//                                              <button className='btn1' onClick={()=>navigateToDetails(id)}>Details</button>
// 												{/* <ul>
// 														<li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
// 														<li><a href="#"><i class="fas fa-heart"></i></a></li>
// 														<li><a href="#"><i class="fas fa-plus"></i></a></li>
// 														<li><a href="#"><i class="fas fa-expand"></i></a></li>
// 												</ul> */}
// 										</div>
// 										<div class="part-2">
// 												<h3 class="product-title">{title}</h3>
// 												{/* <h4 class="product-old-price">$79.99</h4> */}
// 												<h4 class="product-price">${price}</h4>
// 										</div>
// 								</div>
						

      
// </section>


        <div className=' cardBox col-md-6 col-lg-4 col-sm-1'>
            <Card className='mt-3 shadow' style={{ height: '30rem' }}>
            <Card.Img className=' mx-auto p-3' style={{width: '228px', height:'228px'}} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p className='mt-3 fs-3'>Price : ${price}</p>
            </Card.Body>
            <div className='text-center mb-4'>
                <button className='btn1' onClick={()=>navigateToDetails(id)}>Details</button>
            </div>
            </Card>
        </div>
    );
};

export default Product;