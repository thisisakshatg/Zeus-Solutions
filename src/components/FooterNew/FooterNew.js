import React from 'react';
import logo from '../../assets/img/logo.png';

const FooterNew = () => {
  return (
    <footer role="contentinfo" className="footer-new">
      <div>
        <div class="column copyright">
          <a aria-current="page" class="" href="/">
            <div className="logo">
              <img
                className="footer-new-logo"
                src={logo}
                alt="Hatchet Agency Logo"
                height="auto"
              />
            </div>
          </a>
          <small>© 2022 Zeus Solutions Inc., All Rights Reserved.</small>
          <br />
          <a href="/privacy-policy">
            <small>Privacy Policy</small>
          </a>
        </div>
        <div class="column">
          <h4>Discovery</h4>
          <div class="menu-discovery-container">
            <ul class="menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/case-studies">Case Studies</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/tax-sale-portal">Tax Sale Portal</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/envoy-data-management">Envoy Data Management</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <h4>Quick Links</h4>
          <div class="menu-services-container">
            <ul class="menu">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/">Home</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/about">About Us</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/services">Services</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/careers">Careers</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/industries">Industries</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="column footer-contact">
          <h4>Contact</h4>
          <ul>
            <li className="list-item-new new-1">
              <ion-icon class="list-icon io2" name="map-outline"></ion-icon>
              <a href="#">
                2656 South Loop West #265
                <br />
                Houston, Texas 77054, United States.
              </a>
            </li>
            <li className="list-item-new new-2">
              <ion-icon class="list-icon" name="logo-linkedin"></ion-icon>
              <a href="https://www.linkedin.com/company/zeussolutionsinc/">
                LinkedIn
              </a>
            </li>
            <li className="list-item-new new-3">
              <ion-icon class="list-icon" name="mail-outline"></ion-icon>
              <a href="mailto:hr@zeussolutionsinc.com">
                hr@zeussolutionsinc.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
