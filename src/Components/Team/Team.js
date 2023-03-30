import React from 'react';
import './Team.css';

const Team = (proms) => {
    let { players } = proms;

    let total = 0,i=1;

    for (const player of players) {
        total = total + player.price;
    }

    return (
        <div className='team'>
            <h2 className='teamTitle'>My Team</h2>
            <h3>Cricketer Name</h3>
            <hr />
            <div className='playersName'>
                {
                    players.map(player => <h3>{i++}. {player.name}</h3>)
                }
            </div>
            <h2>Total Cost: ${total}</h2>
        </div>
    );
};

export default Team;