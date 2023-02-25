import React from 'react';
import CareersCard from '../../Utilities/CareersCard/CareersCard';
import Header from '../Header/Header';

const Careers = () => {
  return (
    <section className="section-careers-page">
      <div className="full-img img-Industries">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">Careers</h1>
          </div>
        </section>
      </div>
      <div className="container">
        <CareersCard />
        <CareersCard />
        <CareersCard />
        <CareersCard />
        <CareersCard />
      </div>
    </section>
  );
};

export default Careers;
