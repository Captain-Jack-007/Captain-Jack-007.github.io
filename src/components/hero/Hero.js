import React from 'react';
import './hero.css';
import phoneImage from '../../images/Component 157.png'; // Use your uploaded PNG
import { ReactComponent as AppStoreButton } from '../../images/svg/Component 206.svg'; // SVG button

function Hero() {
  return (
    <section className="hero" id="landing-home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Connecting <br />
            Foreign <br />
            <strong>Talent & Businesses</strong> <br />
            Across Borders
          </h1>
          <p className="hero-subtitle">
            Find jobs, after services, and build your future with <br />
            Globance — your all-in-one cross-border opportunity platform.
          </p>
          <div className="download-button">
            <a
              href="https://apps.apple.com/kg/app/globance/id6463636100"
              target="_blank"
              rel="noreferrer"
              title="Download on the App Store"
            >
              <AppStoreButton />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={phoneImage} alt="Globance app preview on phone" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
