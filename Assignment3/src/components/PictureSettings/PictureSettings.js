import React from 'react'
import './PictureSettings.css';

const PictureSettings = () => {
    return (
        <div className="profile-content" id="picture">
            <div className="row">
                <div className="col-md-12">
                    <h3>Picture</h3>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Picture Mode</li>
                        <li>Picture Size</li>
                        <li>Eye Care</li>
                        <li>Expert Settings</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>Movie</li>
                        <li>16:9 Standard</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PictureSettings