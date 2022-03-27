import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { name, picture, price } = props.product;
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <div>
                <h3>Name: {name}</h3>
                <h5>Price: ${price}</h5>
            </div>
            <br></br>
            <button onClick={() => props.handleBtn(props.product)} className='btn'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;