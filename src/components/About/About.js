import React from 'react';
import Header from '../Header/Header';
import img1 from '../../assets/img/photo-1600880292203-757bb62b4baf.avif';
import im from '../../assets/img/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import f1 from '../../assets/img/CEO-1.jpg';
import f2 from '../../assets/img/1517676002406.jpg';

const About = () => {
  return (
    <section>
      <div className="full-img img-about">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">About Us</h1>
            {/* <h2 className="heading-secondary contact-secondary case">
              Why we do what we do !!
            </h2> */}
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
      <section class="section-pricing" id="pricing">
        <div class="container">
          <h2 class="heading-secondary heading-aboutUs">Meet the founder </h2>
        </div>

        <div class="container grid-about grid--2-cols">
          <div class="feature">
            <div class="img__wrap">
              <img class="img__img" src={f1} />
              <p class="img__description feature-text">
                This image looks super neat.
              </p>
            </div>
            <p class="feature-title heading-benefits">Bala Narasimhan</p>
            <p class="feature-text">
              Analyse and generate statistical insights from data
            </p>
          </div>
          <div class="feature">
            <div class="img__wrap">
              <img class="img__img" src={f2} />
              <p class="img__description feature-text">
                This image looks super neat.
              </p>
            </div>
            <p class="feature-title heading-benefits">Seetha Sundararaman</p>
            <p class="feature-text">
              Analyse and generate statistical insights from data
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
