import React from 'react';
import Header from '../Header/Header';
import { Player } from '@lottiefiles/react-lottie-player';
import Card from '../../Utilities/Card/Card';

const Industries = () => {
  return (
    <section className="section-Industries">
      <div className="full-img img-Industries">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">Industries</h1>
            {/* <h2 className="heading-secondary contact-secondary case">
                Shaping the future
              </h2> */}
          </div>
        </section>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md indus">
        <Card
          image="resources.jpg"
          tag="Oil"
          title="Energy, Resources and Utilities"
          description="As demand for petroleum and petroleum products plummeted, oil and gas companies are on the verge of reinventing...."
          industry="energy"
          homepage="false"
        />
        <Card
          image="healhcare.jpg"
          tag="Energy"
          title="Healthcare and Biotechnology"
          description="Research and development in biotech and healthcare have increased the dependency on extensive of use of big data.... "
          industry="healthcare"
          homepage="false"
        />
        <Card
          image="finance.jpg"
          tag="Petroleum"
          title="Finance and Wealth Management"
          description="Data is growing at an exponential rate, whether fostered by social media or by devices with built-in chips, big data...."
          industry="finance"
          homepage="false"
        />
        <Card
          image="telecom.jpg"
          tag="Petroleum"
          title="Telecom Industry"
          description="The telecom sector is one of the most disrupted fields in modern digitalization and is struggling to keep up with the...."
          industry="telecom"
          homepage="false"
        />
        <Card
          image="agri.jpg"
          tag="Electric"
          title="Agriculture Industry"
          description="By 2050, world is expecting to have around 10 Billion people, and India as the fastest developing country is likely...."
          industry="agriculture"
          homepage="false"
        />
        <Card
          image="insurance.jpg"
          tag="Oil"
          title="Insurance Industry"
          description="While we are all being prepared to face risks which we are unaware or aren’t prepared for, we feel happy...."
          industry="insurance"
          homepage="false"
        />
      </div>
    </section>
  );
};

export default Industries;

{
  /* <section class="section-how pos-rel" id="how">
        <div class="container">
          <span class="subheading">Our Specialty</span>
          <h2 class="heading-secondary">We specialise in multiple sectors</h2>
        </div>


        <div class="container grid grid--2-cols grid--center-v">
          <div class="step-text-box step-text-industry">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">Energy, Resources and Utilities</h3>
            <ul class="list">
              <li class="list-item">
                <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                <span>
                  As demand for petroleum and petroleum products plummeted, oil
                  and gas companies are on the verge of reinventing into
                  socially responsible, sustainable, renewable energy companies.
                  As they expand their portfolio into clean energy space, and
                  commit to net-zero carbon footprint, investors and
                  shareholders have put immense pressure on these companies to
                  provide transparency in achieving net-zero carbon goal over a
                  10 to 20 year time horizon. This need has caused several oil
                  majors to aggregate thruput and financial performance across
                  generation, trading, customers classification. Zeus Solutions
                  helps oil and gas clients bring disparate data residing across
                  several ERPs, Production, Trading and Manufacturing systems
                  into a single consolidated reportable environment to instill
                  confidence and transparency in investors and stockholders.
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
          <div class="step-img-box ">
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
          <div class="step-text-box step-text-industry">
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

          <div class="step-text-box step-text-industry">
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
      <p class="plan-details step-text-industry">
        To learn more about our programs:{' '}
        <a href="https://zeussolutionsinc.com/services/" class="link">
          Learn more
        </a>
      </p> */
}
