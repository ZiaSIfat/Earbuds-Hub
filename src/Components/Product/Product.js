import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, picture, price } = props.product;
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <div>
                <h3>Name: {name}</h3>
                <p>Price: {price}</p>
            </div>
            <button onClick={() => props.handleBtn(props.product)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default Product;