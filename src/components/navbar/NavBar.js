import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from '../../images/svg/Globance-logo.svg';
import './navbar.css';
function NavBar() {
  const [showDialog, setShowDialog] = useState(false);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowDialog(false);
      }
    };
    if (showDialog) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDialog]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Logo />
          <span
            style={{ fontWeight: '600', fontSize: '1.25rem', color: '#fff' }}
          >
            Globance
          </span>
        </div>

        <div className="download-wrapper">
          <button
            ref={buttonRef}
            onClick={() => setShowDialog(!showDialog)}
            className="download-button-toggle"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Download
          </button>
          {showDialog && (
            <div ref={dialogRef} className="floating-download-dialog">
              <a
                href="https://apps.apple.com/kg/app/globance/id6463636100"
                target="_blank"
                rel="noreferrer"
                className="download-link"
              >
                Download for iOS
              </a>
              <a
                href="https://apps.apple.com/kg/app/globance/id6463636100"
                target="_blank"
                rel="noreferrer"
                className="download-link"
              >
                Download for Mac
              </a>
              {/* <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noreferrer"
                className="download-link"
              >
                Download for Android
              </a> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
