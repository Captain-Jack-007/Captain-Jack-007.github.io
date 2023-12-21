import React from 'react';

function PageLink({ href, text, childClassName, onClick }) {
  return (
    <li onClick={onClick}>
      <a href={href} rel="noreferrer" className={childClassName}>
        {text}
      </a>
    </li>
  );
}

export default PageLink;
