import React from 'react'
import '../components/PictureSettings/PictureSettings.css';

const GeneralSettings = () => {
    return (
        <div className="profile-content" id="picture">
            <div className="row">
                <div className="col-md-12">
                    <h3>General</h3>
                </div>
                <div className="col-md-12">
                    <ul>
                        <li>Accessibility</li>
                        <li>Voice</li>
                        <li>Network</li>
                        <li>System Manager</li>
                        <li>External Device Manager</li>
                        <li>Apple AirPlay Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings