import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import feature1a from '../../images/svg/features/1a.svg';
import feature1b from '../../images/svg/features/1b.svg';
import feature1c from '../../images/svg/features/1cc.svg';
import feature1d from '../../images/svg/features/1d.svg';
import './featurepreview.css';

const tabs = [
  {
    title: 'Business insights',
    key: 'service',
    images: [feature1a, feature1c],
  },
  {
    title: 'Chat and Post',
    key: 'job',
    images: [feature1d, feature1b],
  },
];

function FeaturesPreview() {
  const [activeTab, setActiveTab] = useState('service');
  const activeImages = tabs.find((tab) => tab.key === activeTab).images;

  return (
    <section className="section features-preview">
      <div className="tabs-wrapper">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="feature-image-wrapper multiple desktop-only">
        {activeImages.map((img, idx) => (
          <div key={idx} className="feature-image-container">
            <img
              src={img}
              alt={`${activeTab} screenshot ${idx + 1}`}
              className="feature-image show"
            />
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Swiper */}
      <div className="feature-carousel mobile-only">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {activeImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="feature-image-container">
                <img
                  src={img}
                  alt={`${activeTab} screenshot ${idx + 1}`}
                  className="feature-image show"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturesPreview;
