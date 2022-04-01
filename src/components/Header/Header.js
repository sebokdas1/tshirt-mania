import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>Welcome To TSHIRT-MANIA!!</h2>
            <div>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
            </div>
        </div>
    );
};

export default Header;