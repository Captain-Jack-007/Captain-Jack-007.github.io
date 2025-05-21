import React from 'react';
import { PageLinks, SocialLinks } from '../data';
import PageLink from './PageLink';

function Footer() {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links"></ul>
        <ul className="footer-icons">
          {/* {SocialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })} */}
        </ul>
        <p className="copyright">
          copyright 2023 &copy; Powered by Beijing Navana Technologies
          <span id="date"></span> All rights protected.
        </p>
      </footer>
    </>
  );
}

export default Footer;
