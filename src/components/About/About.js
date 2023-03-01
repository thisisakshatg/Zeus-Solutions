import React from 'react';
import Header from '../Header/Header';
import img1 from '../../assets/img/photo-1600880292203-757bb62b4baf.avif';
import im from '../../assets/img/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import f1 from '../../assets/img/CEO-1.jpg';
import f2 from '../../assets/img/1517676002406.jpg';
import { Player } from '@lottiefiles/react-lottie-player';

const About = () => {
  return (
    <section className="section-about-page">
      <div className="full-img img-about">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">About Us</h1>
          </div>
        </section>
      </div>
      <section class="section-cta" id="cta">
        <div class="container">
          <div class="about-cta">
            <div class="cta-text-box">
              <h2 class="heading-secondary">Who are we ?</h2>
              <p class="feature-text heading-abouts">
                Zeus Solutions Inc is a Houston based consulting boutique that
                specializes in delivering technology and risk management
                solutions to Oil, Gas, Commodities, Energy Trading, Retail and
                Utility clients. Our consultants are regarded as high value-add,
                insight oriented, business proposition focused delivery team.{' '}
              </p>
              <br></br>
              <p class="feature-text heading-abouts">
                We are helping clients deliver on their digital strategy and
                data platform initiatives on Azure and AWS cloud platforms
              </p>
              <br></br>
              <p class="feature-text heading-abouts">
                We also partner with a few system integration providers in the
                cloud migration and cloud application journey
              </p>
              <br></br>
              <p class="feature-text heading-abouts">
                Our team is delivering on several large engagements at major
                energy companies including in their Energy Growth Strategy
                areas.
              </p>
              <br></br>
            </div>
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <img src={img1} className="img-about-box" />
            </div>
          </div>
        </div>
      </section>
      <div class="container grid grid--3-cols">
        <div class="feature">
          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_4zh4wnhp.json"
            className="player"
            loop
            autoplay
            style={{ height: '30rem', width: '30rem' }}
          />
          <p class="feature-title">Digital Solutions</p>
        </div>
        <div class="feature">
          <Player
            src="https://assets3.lottiefiles.com/private_files/lf30_9lkmjxia.json"
            className="player"
            loop
            autoplay
            style={{ height: '30rem', width: '30rem' }}
          />
          <p class="feature-title">Creative Strategy</p>
        </div>
        <div class="feature">
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_TB77E4H1mO.json"
            className="player"
            loop
            autoplay
            style={{ height: '30rem', width: '30rem' }}
          />{' '}
          <p class="feature-title">Powerful Services</p>
        </div>
      </div>
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
                    <span class="statistics">60+</span> Projects
                  </p>
                </div>
                <div class="feature">
                  <p class="statistics-text">
                    <span class="statistics">45+</span> Consultants
                  </p>
                </div>
                <div class="feature">
                  <p class="statistics-text">
                    <span class="statistics">13+</span> Years
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
                  src={require('./../Marketing consulting-amico.svg').default}
                  alt="mySvgImage"
                  class="statistic-icon"
                />
              </div>
            </div>
            <a href="#cta" class="btn btn--full margin-right-sm btn-rights">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
      <section class="section-how section-aboutt" id="how">
        <div class="container">
          <h2 class="heading-secondary" style={{ textAlign: 'center' }}>
            meet the founder
          </h2>
        </div>

        <div class="container grid grid--2-cols grid--center-v grid-section-how">
          <div class="step-text-box">
            <h3 class="heading-tertiary">Bala Narasimhan</h3>
            <p className="feature-text">
              Mr. Narasimhan is an energy commodity risk management expert with
              deep understanding of life cycle of commodity transactions. With
              23 years of exclusively commodity trading industry experience, Mr.
              Narasimhan helps energy companies assess and enter new markets,
              trade new commodities, handle complex operational and financial
              risks.
            </p>
            <br></br>
            <p className="feature-text">
              As a trusted advisor, Mr. Narasimhan leads large organizations’
              transformation and digital strategy initiatives by engaging
              stakeholders across all business functions. As an entrepreneur,
              Mr. Narasimhan has a special knack to identifying immediate
              business value drivers and is laser focused in executing the plan
              whether it be new market entry, investments, asset/portfolio
              acquisition, divestments or regulatory & compliance initiatives.
            </p>
          </div>
          <div class="step-img-box">
            <img src={f1} className="founder-img" />
          </div>

          <div class="step-img-box boxer-2">
            <img src={f2} className="founder-img" />
          </div>
          <div class="step-text-box">
            <h3 class="heading-tertiary">Seetha Sundararaman</h3>
            <p className="feature-text">
              Seetha Sundararaman is a seasoned professional in IT Commodity
              Trading and Risk Management. He possesses broad industry knowledge
              in Commodity Trading and Risk Management, with a deep knowledge of
              the Physical Gas, LNG, and Power businesses. He has over 2 decades
              of experience in every aspect of commodity trading IT projects. He
              has advised the C-suite of various sizes of Oil & Gas and
              Utilities across the globe to build their Technology and data
              platforms, IT roadmap, risk reporting, regulatory and compliance.
            </p>
            <br></br>
            <p className="feature-text">
              Seetha’s skills include functional and technical areas of CTRM
              design, configuration, and BI architecture. He has a track record
              of proven leadership and management qualities, with a
              team-oriented attitude and experience in working within
              multi-cultural global team environments.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

{
  /* <section class="section-cta" id="cta">
      <div class="container">
        <div class="cta">
          <div class="cta-text-box">
            <h2 class="heading-secondary">React Out to Us</h2>
            <form class="cta-form" name="sign-up" netlify>
              <div>
                <label for="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>
              <div>
                <label for="full-name">Subject</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>
              <div>
                <label for="full-name">Message</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label for="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label for="select-where">Where did you hear from us?</label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button class="btn btn--form">Send Message</button>
            </form>
          </div>
          <div
            class="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section> */
}
