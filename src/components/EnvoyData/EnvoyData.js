import React from 'react';
import Header from '../Header/Header';
import { Player } from '@lottiefiles/react-lottie-player';
import img1 from '../../assets/img/photo-1600880292203-757bb62b4baf.avif';
import Slider from '../../Utilities/Slider/Slider';
import EnvoySlider from '../EnvoySlider/EnvoySlider';

const EnvoyData = () => {
  return (
    <section>
      <div className="full-img img-envoy">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">
              Envoy Data Management
            </h1>
            <h2 className="heading-secondary contact-secondary case"></h2>
          </div>
        </section>
      </div>
      <section class="section-cta env" id="cta">
        <div class="container">
          <div class="about-cta about-align">
            <div class="cta-text-box text">
              <h2 class="heading-secondary">Who are we ?</h2>
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon i1"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Easy, centralized way to manage master data, reference data,
                    configuration data and other source-target mapping to
                    connected applications
                  </span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon i2"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    User Authentication and authorization enabled with
                    user-defined Members, Roles and Tasks
                  </span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon i3"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Secure way to store structured data as well as unstructured,
                    complex format files
                  </span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon i4"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Data Security enabled at dataset-level as well as at
                    row-level
                  </span>
                </li>
              </ul>
            </div>
            <div class="cta-about-box" aria-label="Woman enjoying food">
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_nv3lkb9v.json"
                className="player"
                loop
                autoplay
                style={{ height: '33rem', width: '33rem' }}
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
                src="https://assets2.lottiefiles.com/packages/lf20_qrg2wc9f.json"
                className="player"
                loop
                autoplay
                style={{ height: '25rem', width: '25rem' }}
              />
            </div>
            <div class="cta-text-box box-2">
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Approval workflow integrated right into the dataset. Secure
                    groups
                  </span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Audit tracking and historical change tracking</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon i7"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Cloud-based application. No-code/Low-code enabled to allow
                    for additional datasets
                  </span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Interface to Azure Data Lake for analytics and insight
                    generation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section-cta env" id="cta">
        <div class="container">
          <div class="about-cta about-align margin-adjust">
            <div class="cta-text-box text">
              <ul class="list">
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Reminder popup of pending approval actions</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>SOC 2 Certification in progress</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Rules and Expression builder in progress</span>
                </li>
                <li class="list-item">
                  <ion-icon
                    class="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    AI enabled Google Maps icon to display on Google Maps in
                    progress
                  </span>
                </li>
              </ul>
            </div>
            <div class="cta-about-box" aria-label="Woman enjoying food">
              {/* <Player
                src="https://assets5.lottiefiles.com/packages/lf20_r8v98dbe.json"
                className="player"
                loop
                autoplay
                style={{ height: '35rem', width: '35rem' }}
              /> */}
              <EnvoySlider />
            </div>
          </div>
        </div>
        {/* <div class="container">
          <div class="about-cta about-section-box">
            <div class="cta-text-box">
              <button class="btn btn--about">Book Meeting</button>
            </div>
            <Slider />
          </div>
        </div> */}
      </section>
    </section>
  );
};

export default EnvoyData;
