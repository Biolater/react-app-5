import "./OurApps.css";
import React from 'react'
import { appStoreIcon, playStoreIcon } from "../../assets/data"

const OurApps = () => {
    return (
        <section id="apps">
            <div className="container">
                <h1 className="apps-title">
                    Get our App
                </h1>
                <p className="apps-explanation">
                    You can use our App for better experience on smartphones
                </p>
                <div className="apps-container">
                    <div className="app">
                        <img src={appStoreIcon} alt="app store" />
                        <p>App Store</p>
                    </div>
                    <div className="app">
                        <img src={playStoreIcon} alt="play store" />
                        <p>Google Play</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurApps