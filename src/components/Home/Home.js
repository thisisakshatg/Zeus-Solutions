import React from 'react';
import Header from '../Header/Header';

import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  return (
    <div>
      {/* SECTION HERO */}
      <section class="section-hero">
        <div className="full-img img-hero">
          <Header />
          <section class="section-contact-us">
            <div class="container">
              <h1 className="heading-primary contact-primary">
                Innovative solutions at lightning speed
              </h1>
              {/* <h2 className="heading-secondary contact-secondary case zeus">
                Zeus Solutions Inc
              </h2> */}
            </div>
          </section>
        </div>
      </section>

      {/* SECTION FEATURES */}

      <section class="section-pricing pos-rel" id="pricing">
        <div class="container">
          {/* <span class="subheading">Benefits</span> */}
          <h2 class="heading-secondary">What we do best</h2>
        </div>

        <div class="container grid grid--4-cols">
          <div class="feature">
            <Player
              src="https://assets5.lottiefiles.com/packages/lf20_cdRQyb.json"
              className="player"
              loop
              autoplay
              style={{ height: '20rem', width: '20rem' }}
            />
            <p class="feature-title heading-benefits">Laser Fast Delivery</p>
            <p class="feature-text">
              On time Delivery of products and services to serve best
            </p>
          </div>
          <div class="feature">
            <Player
              src="https://assets6.lottiefiles.com/packages/lf20_poccampz.json"
              className="player"
              loop
              autoplay
              style={{ height: '20rem', width: '20rem' }}
            />
            <p class="feature-title heading-benefits">Business Insights</p>
            <p class="feature-text">
              Analyse and generate statistical insights from data
            </p>
          </div>
          <div class="feature">
            <Player
              src="https://assets9.lottiefiles.com/packages/lf20_ztIiK2oRB6.json"
              className="player"
              loop
              autoplay
              style={{ height: '20rem', width: '20rem' }}
            />
            <p class="feature-title heading-benefits">Get Business Value</p>
            <p class="feature-text">
              Unlock and get your business value at all times
            </p>
          </div>
          <div class="feature">
            <Player
              src="https://assets6.lottiefiles.com/packages/lf20_vsazmtvs.json"
              className="player"
              loop
              autoplay
              style={{ height: '20rem', width: '20rem' }}
            />
            <p class="feature-title heading-benefits">Agile Code Stack</p>
            <p class="feature-text">
              Agile and lean principle application for optimum results
            </p>
          </div>
        </div>
      </section>

      {/* SECTION-HOW */}
      <section class="section-how" id="how">
        <div class="container">
          <h2 class="heading-secondary">OUR SPECIALTIES</h2>
        </div>

        <div class="container grid grid--2-cols grid--center-v">
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">Trading and Risk management</h3>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  Experts in Electricity, Natural gas, Renewables and other
                  markets
                </span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  Asset valuation – Gross Margin, EBITDA Analysis among many
                  others
                </span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  Potential Future collateral, margining and Credit Risk
                  Management
                </span>
              </li>
            </ul>
          </div>
          <div class="step-img-box">
            <Player
              src="https://assets2.lottiefiles.com/packages/lf20_zhADUdzV8b.json"
              className="player"
              loop
              autoplay
              style={{ height: '40rem', width: '40rem' }}
            />
          </div>

          <div class="step-img-box">
            <Player
              src="https://assets9.lottiefiles.com/packages/lf20_tljjahng.json"
              className="player"
              loop
              autoplay
              style={{ height: '50rem', width: '50rem' }}
            />
          </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">Data and Analytics</h3>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Data Warehouse and Reporting Platform Modernization</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  Management Reporting and KPI Implementation and Tracking
                </span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  Complex Data Modeling, Harmonization and Data Engineering
                </span>
              </li>
            </ul>
          </div>

          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">Software Solutions</h3>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Custom Cloud and Mobile Applications development</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Test Strategy and Integrated end-to-end Testing</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  Evaluation of functional scalability and scoring of Business
                  Value
                </span>
              </li>
            </ul>
          </div>

          <div class="step-img-box">
            <Player
              src="https://assets2.lottiefiles.com/packages/lf20_14uss47o.json"
              className="player"
              loop
              autoplay
              style={{ height: '50rem', width: '50rem' }}
              speed={2}
            />
          </div>
        </div>
      </section>
      <p class="plan-details">
        {/* To learn more about our programs:{' '} */}
        <a
          href="https://zeussolutionsinc.com/services/"
          class="btn btn--full btn--card"
        >
          Learn more
        </a>
      </p>

      {/* SECTION STATISTICS */}
      <section class="section-statistics">
        <div class="container">
          <h3 class="heading-quarterly">
            We offer a suite of quality products that will help you get there
            smoothly.
          </h3>
          <div class="container">
            <div class="data">
              <div class="grid grid--2-cols statistic-data-sec">
                <div class="feature">
                  <p class="statistics-text">
                    <span class="statistics">60+</span> Counting Projects
                  </p>
                </div>
                <div class="feature">
                  <p class="statistics-text">
                    <span class="statistics">45+</span> Consultants
                  </p>
                </div>
                <div class="feature">
                  <p class="statistics-text">
                    <span class="statistics">13+</span> Consecutive Years
                  </p>
                </div>
                <div class="feature">
                  <p class="statistics-text">
                    <span class="statistics">10+</span> Customers
                  </p>
                </div>
              </div>
              <div class="statistic-logo">
                <img
                  src={require('./../Investment data-amico.svg').default}
                  alt="mySvgImage"
                  class="statistic-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INDUSTRY */}

      <section class="section-industry pos-rel" id="pricing">
        <div class="container">
          <h2 class="heading-secondary">Industries</h2>
        </div>

        <div class="container grid grid--3-cols">
          <div class="feature">
            <Player
              src="https://assets4.lottiefiles.com/packages/lf20_ojrgjebz.json"
              className="player"
              loop
              autoplay
              style={{ height: '20rem', width: '20rem' }}
              speed={2}
            />
            <p class="feature-title">Telecom</p>
          </div>
          <div class="feature">
            <Player
              src="https://assets5.lottiefiles.com/packages/lf20_Pkg2zS.json"
              className="player"
              loop
              autoplay
              style={{ height: '20rem', width: '20rem' }}
              speed={2}
            />
            <p class="feature-title">Healthcare</p>
          </div>
          <div class="feature">
            <Player
              src="https://assets6.lottiefiles.com/packages/lf20_ARkCee4t86.json"
              className="player"
              loop
              autoplay
              style={{ height: '15rem', width: '15rem', marginBottom: '5rem' }}
              speed={2}
            />{' '}
            <p class="feature-title">Finance</p>
          </div>
          <div class="feature">
            <Player
              src="https://assets6.lottiefiles.com/packages/lf20_ZdysHt.json"
              className="player"
              loop
              autoplay
              style={{ height: '15rem', width: '15rem' }}
              speed={2}
            />
            <p class="feature-title">Energy</p>
          </div>
          <div class="feature">
            <Player
              src="https://assets9.lottiefiles.com/packages/lf20_qnA9I4.json"
              className="player"
              loop
              autoplay
              style={{ height: '15rem', width: '20rem' }}
              speed={2}
            />
            <p class="feature-title">Agriculture</p>
          </div>
          <div class="feature">
            <Player
              src="https://assets6.lottiefiles.com/packages/lf20_ZDJAHJXiMi.json"
              className="player"
              loop
              autoplay
              style={{ height: '15rem', width: '15rem' }}
              speed={2}
            />
            <p class="feature-title">Insurance</p>
          </div>
        </div>
        <p class="plan-details cta-footer">
          {/* To learn more about our programs:{' '} */}
          <a
            href="https://zeussolutionsinc.com/services/"
            class="btn btn--full"
          >
            Learn more
          </a>
        </p>
      </section>

      {/* SECTION ABOUT */}

      <section class="section-about">
        <div class="container about-div">
          <div class="about-div-1">
            {/* <h2 class="heading-secondary">Our beliefs</h2> */}
            <h3 class="heading-secondary">Equal Opportunity Employment</h3>
            <p class="feature-text">
              Zeus Solutions Inc. is an equal opportunity employer. Our core
              values are diversity, inclusiveness, integrity and accountability.
              We embrace individual differences and in the process create a
              sense of community. Putting clients first is at the heart of
              everything we do. If these values resonate with you, you will make
              a great fit for our company.
            </p>
            <br></br>
            <br></br>
            <p class="feature-text">Multitude of roles available:</p>
            <br></br>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Data Engineer</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>AWS Data Engineer</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Data Scientist</span>
              </li>
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>Spotfire Developer</span>
              </li>
            </ul>
            <a href="#cta" class="btn btn--full margin-right-sm btn-rights">
              Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
