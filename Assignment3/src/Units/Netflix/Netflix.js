import React from 'react';
import './Netflix.scss';
import vector from '../../assets/Vector.png';
import game from '../../assets/game.png';

const Netflix = () => {
    return (
        <div className="n-container">
            <div className="n-playstation">
                <div className="n-playstationImage">
                    <img src={vector} alt="" />
                </div>
                <div className="n-games">
                    <img src={game} alt="" />
                    <img src={game} alt="" />
                    <img src={game} alt="" />
                    <img src={game} alt="" />
                    <img src={game} alt="" />
                    <img src={game} alt="" />
                    <img src={game} alt="" />
                </div>
            </div></div>
    )
}

export default Netflix