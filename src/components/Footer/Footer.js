import React from 'react';
import logo from '../logo.png';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img class="logo" alt="Zeus Sol logo" src={logo} />
          </a>

          <ul class="social-links">
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>

          <p class="footer-about">
            Zeus Solutions Inc is a Houston based consulting boutique that
            specializes in delivering technology and risk management solutions
            to Oil, Gas, Commodities, Energy Trading, Retail and Utility
            clients.
          </p>

          <p class="copyright">
            Copyright &copy; <span class="year">2022</span> Zeus Solutions Inc.,
            All rights reserved.
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              2656 South Loop West #265, Houston, Texas 77054, United States.
            </p>
            <p>
              <a class="footer-link" href="mailto:hr@zeussolutionsinc.com">
                hr@zeussolutionsinc.com
              </a>
            </p>
          </address>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">Quick Links</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="./">
                Home
              </a>
            </li>
            <li>
              <a class="footer-link" href="./about">
                About Us
              </a>
            </li>
            <li>
              <a class="footer-link" href="./services">
                Services
              </a>
            </li>
            <li>
              <a class="footer-link" href="./tax-sale-portal">
                Tax Sale Portal
              </a>
            </li>
            <li>
              <a class="footer-link" href="./industries">
                Industries
              </a>
            </li>
            <li>
              <a class="footer-link" href="./contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Careers</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="./careers">
                Data Scientist
              </a>
            </li>
            <li>
              <a class="footer-link" href="./careers">
                Data Engineer
              </a>
            </li>
            <li>
              <a class="footer-link" href="./careers">
                AWS Data Engineer
              </a>
            </li>
            <li>
              <a class="footer-link" href="./careers">
                Spotfire Developer
              </a>
            </li>
            <li>
              <a class="footer-link" href="./careers">
                View More >>
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a class="footer-link" href="./privacy-policy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
