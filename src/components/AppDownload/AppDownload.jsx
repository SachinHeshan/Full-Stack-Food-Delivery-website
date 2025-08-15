import React from 'react';
import './AppDownload.css';
import{playstore } from '../../assets/asset.js';
import {appstore} from '../../assets/asset.js';

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience download <br /><span>FoodExpress App</span></p>
      <div className="app-download-platforms">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={playstore} alt="Get it on Google Play" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={appstore} alt="Download on the App Store" />
        </a>
      </div>
    </div>
  );
}

export default AppDownload;