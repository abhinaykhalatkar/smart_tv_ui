import React from 'react'
import '../PictureSettings/PictureSettings.css';

const GameSettings = () => {
    return (
        <div className="profile-content" id="game">
            <div className="row">
                <div className="col-md-12">
                    <h3>Game</h3>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Game Mode</li>
                        <li>Ultrawide Game View</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>
                            <input type="radio" id="game-mode" name="game-option" />
                        </li>
                        <li>
                            <input type="radio" id="ultrawide-game-view" name="game-option" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GameSettings