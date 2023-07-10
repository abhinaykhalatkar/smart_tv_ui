import React from 'react';
import './Home.scss';
import prime from '../../assets/prime.png'
import netflix from '../../assets/netflix.png';
import disney from '../../assets/d.png';
import youtube from '../../assets/youtube.png';
import userProfile from '../../assets/User profile.png';
import game from '../../assets/game.png';
import Netflix from '../../Units/Netflix/Netflix';
import Playstation from '../../Units/Playstation/Playstation';

const Home = () => {
    return (
        <div className="home-page">
            <div className="side-nav" data-aos="fade-right">
                <Playstation />
                <Netflix />
            </div>
            <main>
                <header className="h-header" data-aos="fade-down-left">
                    <img src={userProfile} alt="" />
                </header>
            </main>
        </div>
    );
};

export default Home;
