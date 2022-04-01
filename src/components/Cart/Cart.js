import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h2>Total Selected Cart: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 4 ? "wow!! you added 4 items" : <p>keep adding</p>}
        </div>
    );
};

export default Cart;