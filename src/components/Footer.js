import React from 'react';
import { PageLinks, SocialLinks } from '../data';
import PageLink from './PageLink';

function Footer() {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {PageLinks.map((link) => {
            return (
              <PageLink
                key={link.id}
                childClassName="footer-link"
                href={link.href}
                text={link.text}
              />
            );
          })}
        </ul>
        <ul className="footer-icons">
          {SocialLinks.map((link) => {
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
          })}
        </ul>
        <p className="copyright">
          copyright &copy; HLB Motors
          <span id="date"></span> Barcha huquqlar himoyalangan.
        </p>
      </footer>
    </>
  );
}

export default Footer;
