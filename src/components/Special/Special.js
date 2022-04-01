import React, { useContext } from 'react';
import { GiftContext } from '../Grandpa/Grandpa';

const Special = () => {
    const gift = useContext(GiftContext)
    return (
        <div>
            <h5>Special</h5>
            <p>Gift: {gift}</p>
        </div>
    );
};

export default Special;