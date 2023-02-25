import React from 'react';
import logo from '../logo.png';

const Header = () => {
  return (
    <header class="header">
      <a href="#">
        <img class="logo" alt="Zeus Sol logo" src={logo} />
      </a>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/about">
              About Us
            </a>
          </li>
          {/* <li>
            <a class="main-nav-link" href="/services">
              Services
            </a>
          </li> */}
          <li>
            <a class="main-nav-link" href="#">
              Product
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/tax-sale-portal">
              Tax Portal
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/envoy-data-management">
              Envoy Mgmt
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/case-studies">
              Case Studies
            </a>
          </li>
          {/* <li>
            <a class="main-nav-link" href="/careers">
              Careers
            </a>
          </li> */}
          <li>
            <a class="main-nav-link" href="/industries">
              Industries
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export default Header;
