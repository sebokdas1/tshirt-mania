import React from 'react';
import './TShirt.css'

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="img" />
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>add to cart</button>
        </div>
    );
};

export default TShirt;