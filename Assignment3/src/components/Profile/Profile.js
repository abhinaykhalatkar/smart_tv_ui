import React, { useState, useEffect } from 'react';
import './Profile.css';
import PictureSettings from '../PictureSettings/PictureSettings';
import SoundSettings from '../SoundSettings/SoundSettings';
import GameSettings from '../GameSettings/GameSettings';
import GeneralSettings from '../GeneralSettings';
import SupportSettings from '../SupportSettings/SupportSettings';
import down from "../../assets/down.png";
import { animateScroll as scroll } from 'react-scroll';
import { AddToPhotosRounded, SurroundSoundRounded, VideogameAssetRounded, ContactSupportRounded, PermDataSettingRounded, AccountBalanceRounded, ArrowBackRounded, ExitToAppRounded } from "@material-ui/icons";
import PrivacySettings from '../PrivacySettings/PrivacySettings';
import Charts from '../Charts/Charts';
import { useInView } from 'react-intersection-observer';
import PieChartComponent from '../Charts/PieChart';
import LineGraph from '../Charts/LineGraph';
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const [activeContent, setActiveContent] = useState('picture');
    const [chartVisible, setChartVisible] = useState(false);
    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    useEffect(() => {
        if (inView) {
            setChartVisible(true);
        }
    }, [inView]);
    const handleSettingsOptionClick = (target) => {
        setActiveContent(target);
    };
    const scrollToContent = () => {
        scroll.scrollToBottom({
            duration: 300,
            smooth: true,
        });
    };
    const renderContent = () => {
        switch (activeContent) {
            case 'picture':
                return <PictureSettings />;
            case 'sound':
                return <SoundSettings />;
            case 'game':
                return <GameSettings />;
            case 'generalSettings':
                return <GeneralSettings />;
            case 'support':
                return <SupportSettings />;
            case 'privacy':
                return <PrivacySettings />;
            default:
                return null;
        }
    };

    const handleHomePage = () => {
        navigate("/home");
    };
    const handleLogout = () => {
        navigate("/");

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="back-button">
                        <ArrowBackRounded onClick={handleHomePage} />
                    </div>
                    <div className="profile-card">
                        <div className="profile-image"></div>
                        <div className="user-details" >
                            <h3>Gordon Ramsay</h3>
                            <p>Global Ranking: 11190</p>
                            <p>Age: 54</p>
                            <p>Location: London</p>
                            <p>Email: gordon@example.com</p>
                            <div className="logout-button" onClick={handleLogout}>
                                Logout<ExitToAppRounded />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="settings-column" >
                        <h3>Settings</h3>
                        <ul className="settings-options" data-aos="fade-right">
                            <li
                                className={activeContent === 'picture' ? 'active' : ''}
                                onClick={() => handleSettingsOptionClick('picture')}
                                data-target="picture"
                            >
                                <AddToPhotosRounded />
                                Picture
                            </li>
                            <li
                                className={activeContent === 'sound' ? 'active' : ''}
                                onClick={() => handleSettingsOptionClick('sound')}
                                data-target="sound"
                            >
                                <SurroundSoundRounded />
                                Sound
                            </li>
                            <li
                                className={activeContent === 'game' ? 'active' : ''}
                                onClick={() => handleSettingsOptionClick('game')}
                                data-target="game"
                            >
                                <VideogameAssetRounded />
                                Game
                            </li>
                            <li
                                className={activeContent === 'generalSettings' ? 'active' : ''}
                                onClick={() => handleSettingsOptionClick('generalSettings')}
                                data-target="generalSettings"
                            >
                                <PermDataSettingRounded />
                                General
                            </li>
                            <li
                                className={activeContent === 'support' ? 'active' : ''}
                                onClick={() => handleSettingsOptionClick('support')}
                                data-target="support"
                            >
                                <ContactSupportRounded />
                                Support
                            </li>
                            <li
                                className={activeContent === 'privacy' ? 'active' : ''}
                                onClick={() => handleSettingsOptionClick('privacy')}
                                data-target="privacy"
                            >
                                <AccountBalanceRounded />
                                Terms & Privacy

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    {renderContent()}
                </div>
                <div className="col-lg-12 text-center">
                    <img src={down} alt="arrow" className="bouncy-image" onClick={scrollToContent} />

                </div>
                <div className="col-lg-6">
                    <div className={`chartSection ${chartVisible ? 'chart-visible' : ''}`} ref={ref}>
                        <PieChartComponent />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={`chartSection ${chartVisible ? 'chart-visible' : ''}`} ref={ref} data-aos="zoom-in-down">
                        <LineGraph title="Power Consumption" datakey="amt" />
                    </div>
                </div>
                <div className="col-lg-12" data-aos="flip-right">
                    <Charts title="All TV Usage" datakey="tvUsage" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
