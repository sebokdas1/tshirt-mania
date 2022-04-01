import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h5>my self</h5>
            <p><small>House: {house}</small></p>
            <Special></Special>
        </div>
    );
};

export default MySelf;