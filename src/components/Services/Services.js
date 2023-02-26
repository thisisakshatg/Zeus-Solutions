import React from 'react';
import Card from '../../Utilities/Card/Card';
import ServicesCard from '../../Utilities/ServicesCard/ServicesCard';
import Header from '../Header/Header';
import { Player } from '@lottiefiles/react-lottie-player';
import EnvoySlider from '../EnvoySlider/EnvoySlider';

const Services = () => {
  return (
    <section className="section-services">
      <section>
        <div className="full-img img-caseStudies">
          <Header />
          <section class="section-contact-us">
            <div class="container">
              <h1 className="heading-primary contact-primary">Services</h1>
            </div>
          </section>
        </div>
        <h3
          class="heading-secondary"
          style={{ textAlign: 'center', marginBottom: '6.4rem' }}
        >
          Key Service Offerings
        </h3>
        <p class="container feature-text feature-services">
          Zeus Solutions Inc is a Houston based consulting boutique that
          specializes in delivering technology and risk management solutions to
          Oil, Gas, Commodities, Energy Trading, Retail and Utility clients. Our
          consultants are regarded as high value-add, insight oriented, business
          proposition focused delivery team.
        </p>
        <div className="container grid grid--3-cols margin-bottom-md">
          <ServicesCard
            number={1}
            url="https://assets10.lottiefiles.com/packages/lf20_8chbmd3p.json"
          />
          <ServicesCard
            number={2}
            url="https://assets9.lottiefiles.com/packages/lf20_9wpyhdzo.json"
          />
          <ServicesCard
            number={3}
            url="https://assets8.lottiefiles.com/packages/lf20_hbvzoeiz.json"
          />
        </div>
      </section>

      <section class="section-cta env env-2" id="cta">
        <p class="container feature-text feature-service-2">
          Zeus Solutions Inc is a Houston based consulting boutique that
          specializes in delivering technology and risk management solutions to
          Oil, Gas, Commodities, Energy Trading, Retail and Utility clients. Our
          consultants are regarded as high value-add, insight oriented, business
          proposition focused delivery team.
        </p>
        <div class="container">
          <div class="about-cta about-align">
            <div class="cta-text-box text">
              <h2 class="heading-tertiary heading-services">Strategy</h2>
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Org Structure and Process Model</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>IT Enterprise Architecture and Landscape</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Information Management</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Value Proposition and Tracking</span>
                </li>
              </ul>
            </div>
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <Player
                src="https://assets3.lottiefiles.com/packages/lf20_h4bos27x.json"
                className="player"
                loop
                autoplay
                style={{ height: '40rem', width: '40rem' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section-envoy env" id="cta">
        <div class="container">
          <div class="about-cta about-align margin-adjust-2">
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_jnqIFpi4XF.json"
                className="player"
                loop
                autoplay
                style={{ height: '35rem', width: '35rem' }}
              />
            </div>
            <div class="cta-text-box box-2">
              <h2 class="heading-tertiary">Governance</h2>
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Program Management</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Transformation and Change Management</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Stakeholder Accountability</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Risks and Issues Management</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Continuous Improvement and Health Checks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section-cta env env-3" id="cta">
        <div class="container">
          <div class="about-cta about-align margin-adjust">
            <div class="cta-text-box text">
              <h2 class="heading-tertiary heading-services">Assessment</h2>
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Business Requirement Gathering</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Detail Functional Review and Scoping</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Product Backlog Development</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Project Planning and Milestone Tracking</span>
                </li>
              </ul>
            </div>
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <Player
                src="https://assets7.lottiefiles.com/packages/lf20_29pmsvbe.json"
                className="player"
                loop
                autoplay
                style={{ height: '40rem', width: '40rem' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section-envoy env env-4" id="cta">
        <div class="container">
          <div class="about-cta about-align margin-adjust-2">
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <Player
                src="https://assets9.lottiefiles.com/packages/lf20_m5fwwmge.json"
                className="player"
                loop
                autoplay
                style={{ height: '32rem', width: '36rem' }}
              />
            </div>
            <div class="cta-text-box box-2">
              <h2 class="heading-tertiary">Implementation</h2>
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Stage Gate and Agile SCRUM Delivery</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Assurance Planning and Execution</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon i7"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>E2E Scenario Planning and Testing</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Incremental Business Value Delivery</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Digital Enablement, Data and Analytics</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Hypercare and Transition to Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section-about section-service-about">
        <div class="container about-div">
          <div class="about-div-1">
            {/* <h2 class="heading-secondary">Our beliefs</h2> */}
            <h3 class="heading-secondary">Our Experience and Approach</h3>
            <p class="feature-text">
              After more than two decades in the industry, we have established
              ourselves as a go to firm for top tier talent in technology. Our
              service includes a comprehensive consult to help identify gaps and
              opportunities, a comprehensive report that includes a business
              plan, investment proposal, project delivery guide, charter with
              timelines and milestones, a cost analysis, and a schedule. We also
              offer a suite of quality products that will help you get there
              quickly and smoothly. That’s how we ensure your success.
            </p>
            <br></br>
            <br></br>
            <a href="#cta" class="btn btn--full margin-right-sm btn-rights">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* <section class="section-how pos-rel" id="how">
        <div class="container">
          <h2 class="heading-secondary">OUR SPECIALTIES</h2>
        </div>

        <div class="container grid grid--2-cols grid--center-v">
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">Strategy</h3>
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
            <h3 class="heading-tertiary">Governance</h3>
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
            <h3 class="heading-tertiary">Assessment</h3>
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
            <p class="step-number">04</p>
            <h3 class="heading-tertiary">Implementation</h3>
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
        </div>
      </section> */}
    </section>
  );
};

export default Services;
