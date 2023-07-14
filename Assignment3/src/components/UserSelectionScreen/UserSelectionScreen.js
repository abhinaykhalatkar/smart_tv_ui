import React from 'react';
import { useNavigate } from 'react-router-dom';
import user1Image from '../../assets/user1.png';
import user2Image from '../../assets/user2.png';
import user3Image from '../../assets/user3.png';
import user4Image from '../../assets/user4.png';
import './UserSelectionScreen.css';

const UserSelectionScreen = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate("/profile");
    };

    return (
        <div className="user-selection-container">
            <h3>Choose a Profile</h3>
            <div className="user-images">
                <div className="user">
                    <img src={user1Image} alt="User 1" onClick={() => handleProfileClick()} />
                    <p>Gordon Ramsay</p>
                </div>
                <div className="user">
                    <img src={user2Image} alt="User 2" onClick={() => handleProfileClick()} />
                    <p>Sarah Müller</p>
                </div>
                <div className="user">
                    <img src={user3Image} alt="User 3" onClick={() => handleProfileClick()} />
                    <p>Mark Johnson</p>
                </div>
                <div className="user">
                    <img src={user4Image} alt="User 4" onClick={() => handleProfileClick()} />
                    <p>Ramsay Mark</p>
                </div>
            </div>
        </div>
    );
};

export default UserSelectionScreen;
