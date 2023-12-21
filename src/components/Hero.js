import React from 'react';

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Elektromobillar makoni</h1>
          <p>
            Yo'l mashaqqatlaridan sizni xalos etuvchi haqiqiy shedevr
            avtomobilga ega bo'ling.
          </p>
          <a href="#tours" className="btn hero-btn">
            Tanishish
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
