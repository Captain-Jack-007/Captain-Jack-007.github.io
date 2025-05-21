import React from 'react';
import './join.css';
import { ReactComponent as AppStoreButton } from '../../images/svg/Component 206.svg';

function JoinUs() {
  return (
    <section className="section joinus" id="join">
      <div className="joinus-container">
        <div className="joinus-business">
          <h2>
            Join globance as a{' '}
            <span className="highlight">Verified Business</span>
          </h2>
          <p>
            Consulting firms, recruiting agencies, and service providers can
            grow with Globance by connecting with clients and showcasing their
            offerings.
          </p>
        </div>

        <hr className="divider" />

        <div className="joinus-download">
          <h2>
            Start your journey with <span className="highlight">Globance</span>
          </h2>
          <div className="joinus-app">
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
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
