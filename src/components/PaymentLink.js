import React from 'react';
function PaymentLinks({ className, title, description }) {
  return (
    <>
      <article className="service">
        <span className="service-icon">
          <i className={className}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">{description}</p>
        </div>
      </article>
    </>
  );
}

export default PaymentLinks;
