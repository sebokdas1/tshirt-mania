import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome To TSHIRT-MANIA!!</h2>
            <div className='links'>
                <CustomLink to='/'></CustomLink>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
            </div>
        </div>
    );
};

export default Header;