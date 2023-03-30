import React, { useEffect, useState } from 'react';
import CricketerCart from '../CrickerterCart/CricketerCart';
import './Cricketer.css';
import Team from '../Team/Team';

const Cricketer = () => {
    const [cricketers, setCricketers] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hnmahamud/players_api/main/players.json?fbclid=IwAR21geN0XSx6U3zMj_GDDhguBk8D1Dk5Yloex6jj9HyhpXngw4J_sMAGt9s')
            .then(res => res.json())
            .then(data => setCricketers(data));
    }, []);

    const selected = (cricketer) => {
        let exist=false;
        for (const player of players) {
            if (player.id === cricketer.id) {
                exist = true;
                break;
            }
        }
        if (exist === true) {
            alert("Already Selected");
        } else {
            const newPlayer = [...players, cricketer];
            setPlayers(newPlayer);
        }
    }

    return (
        <div className='cricketerInfo-container'>
            <div className='cricketerInfo'>
                {
                    cricketers.map(cricketer => <CricketerCart
                        key={cricketer.id}
                        cricketer={cricketer}
                        selected={selected}
                    ></CricketerCart>)
                }
            </div>
            <div className='team'>
                <Team players={players}></Team>
            </div>
        </div>
    );
};

export default Cricketer;