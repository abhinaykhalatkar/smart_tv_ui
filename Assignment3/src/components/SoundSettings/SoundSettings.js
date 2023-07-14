import React from 'react'
import '../PictureSettings/PictureSettings.css';

const SoundSettings = () => {
    return (
        <div className="profile-content" id="sound">
            <div className="row">
                <div className="col-md-12">
                    <h3>Sound</h3>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Sound Output</li>
                        <li>Sound Mode</li>
                        <li>Wifi Speaker Surround Setup</li>
                        <li>Expert Settings</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>TV Speaker</li>
                        <li>Amplify</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SoundSettings