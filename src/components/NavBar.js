import React, { useState } from 'react';
import { PageLinks, SocialLinks } from '../data';
import image2 from '../logo-hlb.png';
import PageLink from './PageLink';

function NavBar() {
  // State to manage the visibility of navigation links
  const [showLinks, setShowLinks] = useState(false);

  // Function to toggle the visibility of navigation links
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={image2} className="nav-logo" alt="backroads" />
            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={toggleLinks}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={`nav-links ${showLinks ? 'show-links' : ''}`}>
            {PageLinks.map((link) => (
              <PageLink
                key={link.id}
                childClassName="nav-link"
                href={link.href}
                text={link.text}
              />
            ))}
          </ul>
          <ul className="nav-icons">
            {SocialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
