import React from 'react';
import { ReactComponent as JobIcon } from '../../images/svg/jobs.svg';
import { ReactComponent as EventIcon } from '../../images/svg/event.svg';
import { ReactComponent as ExpatIcon } from '../../images/svg/expats.svg';
import { ReactComponent as ExpertIcon } from '../../images/svg/expertize.svg';
import Title from '../Title';
import './features.css';

const features = [
  {
    icon: <JobIcon className="feature-icon" />,
    title: 'Find Jobs Fast',
    description:
      "Globance helps international professionals connect with verified employers instantly. Whether you're job-hunting abroad or locally, our smart filters make the process seamless.",
  },
  {
    icon: <EventIcon className="feature-icon" />,
    title: 'Join Global Events',
    description:
      'Discover career fairs, networking events, and community gatherings. Stay connected with the expat ecosystem through events curated for professionals worldwide.',
  },
  {
    icon: <ExpatIcon className="feature-icon" />,
    title: 'Built for Expats',
    description:
      'From visa help to legal services, Globance was designed with foreigners in mind. We simplify relocation and daily needs for expats, so you can focus on your goals.',
  },
  {
    icon: <ExpertIcon className="feature-icon" />,
    title: 'Offer Your Expertise',
    description:
      'Freelancers, consultants, and service providers can showcase their offerings on Globance. Get discovered by a global audience and grow your client base with ease.',
  },
];

function Features() {
  return (
    <section className="section" id="about">
      <Title title="WHY" subTitle="Globance?" />

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
