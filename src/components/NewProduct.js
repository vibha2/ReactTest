import React, { useEffect } from 'react';
import './NewProduct.css';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const NewProduct = ({product}) => {
    useEffect(()=> {
        console.log("product=> ",product.brand)
    })
  return (
    <div >
    <img src={product.thumbnail} alt="img" />
    <br/>
    <h3 className='marginTop: "1rem'>{product.brand}</h3>
    <div className='product-body'>
        <p>{product.category}</p>
        <p>{product.stock}</p>
    </div>
    <p style={{ textAlign: "left"}}>
        {product.description}
    </p>
    
     

    </div>
  )
}

export default NewProduct