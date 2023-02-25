import React from 'react';
import Header from '../Header/Header';

const CareersPage = () => {
  return (
    <div>
      <section className="section-industry-page">
        <div className="full-img img-Industrie-Page">
          <Header />
          <section class="section-contact-us">
            <div class="container">
              <h1 className="heading-primary contact-primary">Careers</h1>
            </div>
          </section>
        </div>
        {/* <div class="container about-div">
          <div class="about-div-1">
            <h2 class="heading-secondary">{title}</h2>
            <p class="feature-text tertiary-industry-page">{primaryContent}</p>
            <br></br>
            <br></br>
            <p class="feature-text tertiary-industry-page">
              {secondaryContent}
            </p>
            <br></br>
            <br></br>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default CareersPage;
