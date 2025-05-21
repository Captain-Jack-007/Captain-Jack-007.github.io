import React from 'react';
import Title from '../Title';
import FeaturesPreview from './FeaturesPreview';
import './featurepreview.css';
function Services() {
  return (
    <>
      <section className="section services" id="features">
        <Title title="Features" subTitle="Preview" />
        <FeaturesPreview />
      </section>
    </>
  );
}

export default Services;
