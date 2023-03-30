import React from 'react';
import './CricketerCart.css';

const CricketerCart = (proms) => {
    const { picture, name, job, price, about } = proms.cricketer;
    const selected = proms.selected;
    return (
        <div className='details'>
            <img src={picture} alt="" />
            <div className='info'>
                <h4>{name}</h4>
                <p>{job}</p>
                <h2>Price: ${price}</h2>
                <p>{about}</p>
            </div>
            <button onClick={()=>selected(proms.cricketer)} className='btn'>Selected</button>
        </div>
    );
};

export default CricketerCart;