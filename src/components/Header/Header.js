import React, { useRef, useState, useEffect } from 'react';
import logo from '../logo.png';

const Header = () => {
  const [isMobile, setMobile] = useState(false);
  const headerRef = useRef();

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const showNavbar = () => {
    headerRef.current.classList.toggle('nav-open');
  };

  return (
    <header class="header" ref={headerRef}>
      <a href="/home">
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
          <li>
            <a class="main-nav-link" href="/services">
              Services
            </a>
          </li>
          <li>
            <a
              class="main-nav-link menu-trigger"
              href="#"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Product
            </a>
          </li>

          <div
            className={`dropdown-menu ${open ? 'active' : 'inactive'}`}
            ref={menuRef}
          >
            <ul>
              <DropdownItem text={'Tax Sale Portal'} link="/tax-sale-portal" />
              <DropdownItem
                text={'Envoy Data Management'}
                link="/envoy-data-management"
              />
            </ul>
          </div>
          <li>
            <a class="main-nav-link" href="/industries">
              Industries
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/case-studies">
              Case Studies
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="/careers">
              Careers
            </a>
          </li>

          <li>
            <a class="main-nav-link" href="/contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={showNavbar}>
        <i className="fas fa-times"></i>
        <i className="fas fa-bars"></i>
      </button>
    </header>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <a href={props.link}> {props.text} </a>
    </li>
  );
}

export default Header;
