import React from 'react';
import Cover from '../../Utilities/Cover/Cover';
import Header from '../Header/Header';

const ContactUs = () => {
  return (
    <div>
      <Cover heading="Contact Us" description="" />
      <section class="section-cta section-Contactt" id="cta">
        <div class="container">
          <div class="cta">
            <div class="cta-text-box">
              <h2 class="heading-secondary">Reach Out to Us</h2>

              <form class="cta-form" name="sign-up" netlify>
                <div>
                  {/* <label for="full-name">Full Name</label> */}
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Your Name*"
                    name="full-name"
                    required
                    className="special"
                  />
                </div>
                <div>
                  {/* <label for="full-name">Full Name</label> */}
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Subject"
                    name="full-name"
                    className="special"
                  />
                </div>
                <div className="form-flex">
                  <div>
                    {/* <label for="full-name">Subject</label> */}
                    <input
                      id="full-name"
                      type="text"
                      placeholder="Your Phone"
                      name="full-name"
                      // required
                    />
                  </div>
                  <div>
                    {/* <label for="full-name">Message</label> */}
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email*"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div>
                  {/* <label for="email">Email address</label> */}
                  {/* <input
                    id="full-name"
                    type="text"
                    placeholder="Your Message*"
                    name="full-name"
                    className="special-msg"
                    required
                  /> */}

                  <textarea
                    cols="50 "
                    rows="7"
                    placeholder="Your Message"
                    data-assigned-row="3"
                  ></textarea>
                </div>

                <button class="btn btn--form">Send Message</button>
              </form>
            </div>
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <div className="about-loc">
                {/* ICON */}
                <ion-icon
                  name="business-outline"
                  class="feature-icon"
                ></ion-icon>
                <h3 className="heading-contact">Zeus Solutions Inc</h3>
              </div>
              <div className="about-loc">
                {/* ICON */}
                <ion-icon
                  name="navigate-outline"
                  class="feature-icon icon-loc"
                ></ion-icon>
                <h3 className="heading-contact">
                  2656 South Loop West #265, Houston, Texas 77054, United
                  States.
                </h3>
              </div>

              <div className="about-loc">
                {/* ICON */}
                <ion-icon name="alarm-outline" class="feature-icon"></ion-icon>
                <h3 className="heading-contact">Operating Hours:</h3>
              </div>

              <div>
                <p className="heading-contact margin-helper">
                  Mon- Fri: 9am - 5pm
                </p>
                <p className="heading-contact margin-helper">
                  Sat- Sun: Closed
                </p>
                <button class="btn btn--about">Book a Meeting</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
