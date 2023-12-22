import React from 'react';
import PaymentLinks from './PaymentLink';
import { PaymentLink } from '../data';
import Title from './Title';
function Services() {
  return (
    <>
      <section className="section services" id="payments">
        <Title title="To'lov" subTitle="Turlari" />
        <div className="section-center services-center">
          {PaymentLink.map((link) => {
            return (
              <PaymentLinks
                key={link.id}
                className={link.className}
                title={link.title}
                description={link.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
