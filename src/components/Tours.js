import React from 'react';
import { ProductLink } from '../data';
import ProductLinks from './ProductLinks';
import Title from './Title';
function Tours() {
  return (
    <>
      <section className="section" id="tours">
        <Title title="Ommabop" subTitle="Elektromobillar" />

        <div className="section-center featured-center">
          {ProductLink.map((link) => {
            return (
              <ProductLinks
                key={link.id}
                img={link.img}
                price={link.price}
                title={link.title}
                description={link.description}
                subTitle={link.subTitle}
                address={link.address}
                status={link.status}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Tours;
