import React, { Fragment } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Industries from './components/Industries/Industries';
import IndustryPage from './components/IndustryPage/IndustryPage';
import About from './components/About/About';
import Person from './Utilities/Person/Person';
import TaxSale from './components/TaxSale/TaxSale';
import EnvoyData from './components/EnvoyData/EnvoyData';
import Slider from './Utilities/Slider/Slider';
import Carousel from './Utilities/Carousel/Carousel';
import CareersCard from './Utilities/CareersCard/CareersCard';
import Careers from './components/Careers/Careers';
import CareersPage from './components/CareersPage/CareersPage';
import ApplyForm from './components/ApplyForm/ApplyForm';
import Services from './components/Services/Services';
import PrivacyPage from './components/PrivacyPage/PrivacyPage';
import FooterNew from './components/FooterNew/FooterNew';

//  p1 p2 p3 p4 p5  -- --  p10

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Home />
          <Footer />
        </Route>
        <Route path="/home" exact>
          <Home />
          <Footer />
        </Route>
        <Route path="/header" exact>
          <Header />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
          <Footer />
        </Route>
        <Route path="/case-studies">
          <CaseStudies />
          <Footer />
        </Route>
        <Route path="/careers" exact>
          <Careers />
          <Footer />
        </Route>
        <Route path="/services" exact>
          <Services />
          <Footer />
        </Route>
        <Route path="/careers/:name">
          <CareersPage />
          <Footer />
        </Route>
        <Route path="/industries" exact>
          <Industries />
          <Footer />
        </Route>
        <Route path="/industries/:name" exact>
          <IndustryPage />
          <Footer />
        </Route>
        <Route path="/tax-sale-portal">
          <TaxSale />
          <Footer />
        </Route>
        <Route path="/envoy-data-management">
          <EnvoyData />
          <Footer />
        </Route>

        <Route path="/about">
          <About />
          <Footer />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPage />
          <Footer />
        </Route>

        <Route path="/footernew">
          <FooterNew />
          {/* <Footer /> */}
        </Route>

        <Route path="*">
          <Header />
          <Footer />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
