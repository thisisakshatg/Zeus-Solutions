import React from 'react';

import Header from '../Header/Header';
import img1 from '../../assets/img/photo-1600880292203-757bb62b4baf.avif';
import { Player } from '@lottiefiles/react-lottie-player';
import Slider from '../../Utilities/Slider/Slider';

const TaxSale = () => {
  return (
    <section className="section-taxSale">
      <div className="full-img img-taxsale">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">Tax Sale Portal</h1>
            {/* <h2 className="heading-secondary contact-secondary case">
              Your taxes, your control !!
            </h2> */}
          </div>
        </section>
      </div>
      <section class="section-cta" id="cta">
        <div class="container">
          <div class="about-cta">
            <div class="cta-text-box">
              <h2 class="heading-secondary">Tax Sale Portal</h2>
              <p class="feature-text heading-abouts">
                Zeus Tax Sale Portal makes it easy and affordable to gain access
                to tax auction data across the country. Zeus Tax Portal provides
                simple and easy signup option for wealth management firms, tax
                litigation firms and high net worth individuals to check out
                latest listings of tax sale data on its beta platform.
              </p>
              <br></br>
              <p class="feature-text heading-abouts">
                The pay per download option is the most affordable way to gain
                access to auction data and the analytical insights of auction
                properties.
              </p>
              <br></br>
              <p class="feature-text heading-abouts">
                *Please read disclaimer in the signup page
              </p>
              <br></br>
              <p class="feature-text heading-abouts">
                In addition, read our case studies page to learn more about how
                Zeus Solutions is delivering on large digital strategy,
                performance report dashboards, KPIs, analytics platforms with
                unlimited potential to scale for the future growth of the
                businesses.
              </p>
              <br></br>
            </div>
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <Player
                src="https://assets8.lottiefiles.com/packages/lf20_xu6vjlhz.json"
                className="player"
                loop
                autoplay
                style={{ height: '45rem', width: '45rem' }}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="about-cta cta-disc">
            <div class="cta-text-box">
              <h2 class="heading-secondary">Disclaimer</h2>
              <p class="feature-text heading-abouts">
                *The goal of our team is to provide a simple consolidated
                downloadable option of publicly available data for properties
                that are listed by the counties for tax/lien sale. It is the
                responsibility of the individual/group to verify the accuracy of
                the information with the respective counties.<br></br> We make
                no guarantee or promise about the accuracy/completeness of the
                contents and are not liable for any errors or omissions in the
                information provided. Zeus Solutions Inc. assumes no
                responsibility for any interpretation / improper use of the
                information obtained from this website.
              </p>
              <br></br>
            </div>
            <Slider />
          </div>
        </div>
      </section>
    </section>
  );
};

export default TaxSale;
