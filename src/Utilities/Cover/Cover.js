import React from 'react';
import Header from '../../components/Header/Header';

const Cover = (props) => {
  return (
    <div className="full-img">
      <Header />
      <section class="section-contact-us">
        <div class="container">
          <h1 className="heading-primary contact-primary">{props.heading}</h1>
          <h2 className="heading-secondary contact-secondary">
            {props.description}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Cover;
