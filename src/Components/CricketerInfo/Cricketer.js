import React, { useEffect, useState } from 'react';
import CricketerCart from '../CrickerterCart/CricketerCart';
import './Cricketer.css';

const Cricketer = () => {
    const [cricketers, setCricketers] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hnmahamud/players_api/main/players.json?fbclid=IwAR21geN0XSx6U3zMj_GDDhguBk8D1Dk5Yloex6jj9HyhpXngw4J_sMAGt9s')
            .then(res => res.json())
            .then(data => setCricketers(data));
    }, []);

    return (
        <div className='cricketerInfo-container'>
            <div className='cricketerInfo'>
                {
                    cricketers.map(cricketer => <CricketerCart
                        key={cricketer.id}
                        cricketer = {cricketer}
                    ></CricketerCart>)
                }
            </div>
            <div className='team'>
                <h2>Team</h2>
            </div>
        </div>
    );
};

export default Cricketer;