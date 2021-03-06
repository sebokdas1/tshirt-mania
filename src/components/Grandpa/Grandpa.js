import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const GiftContext = createContext('ring')
const Grandpa = () => {

    const [house, setHouse] = useState(1);


    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        <GiftContext.Provider value='Diamond Ring'>
            <div className='grandpa'>
                <h3>Grandpa</h3>
                <p>House: {house}  <button onClick={handleBuyAHouse}>buy a house</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </GiftContext.Provider>
    );
};

export default Grandpa;