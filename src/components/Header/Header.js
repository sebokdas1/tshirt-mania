import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome To TSHIRT-MANIA!!</h2>
            <div className='links'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                <CustomLink to='/grandpa'>GrandPa</CustomLink>
            </div>
        </div>
    );
};

export default Header;