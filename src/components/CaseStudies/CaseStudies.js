import React from 'react';
import Card from '../../Utilities/Card/Card';
import Cover from '../../Utilities/Cover/Cover';
import Header from '../Header/Header';

const CaseStudies = (props) => {
  return (
    <section class="section-caseStudies">
      <div className="full-img img-caseStudies">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">CASE STUDIES</h1>
            {/* <h2 className="heading-secondary contact-secondary case">
              Showcasing the latest creative works that have delivered ROI for
              our customers.
            </h2> */}
          </div>
        </section>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        <Card
          image="Oil.jpg"
          tag="Oil"
          title="Oil Major"
          description="Program management of a new market entry in Mexico and Brazil to expand its commodities trading capabilities "
          showReadMore="false"
        />
        <Card
          image="energy.jpg"
          tag="Energy"
          title="Energy Trading"
          description="Implementing a digital strategy and data platform on Azure cloud for an energy trading company "
          showReadMore="false"
        />
        <Card
          image="petroleum.jpg"
          tag="Petroleum"
          title="Petroleum Retailer"
          description="Implementing a mobility data platform on Azure cloud"
          showReadMore="false"
        />
        <Card
          image="petroleum2.jpg"
          tag="Petroleum"
          title="Petroleum Retailer"
          description="Implementing systems and data integration of loyalty and credit payments for unmanned CNG stations"
          showReadMore="false"
        />
        <Card
          image="electric.jpg"
          tag="Electric"
          title="Electric Utility"
          description="Help deliver a financial reporting platform using SAP HANA data warehouse and Tableau intelligence tools"
          showReadMore="false"
        />
        <Card
          image="oil2.jpg"
          tag="Oil"
          title="Oil Upstream"
          description="Creating new insights using scientific methods for the Upstream Engineering teams. Business value insights using field data"
          showReadMore="false"
        />
        <Card
          image="health.jpg"
          tag="Healthcare"
          title="Healthcare Pharma"
          description="Providing Enterprise IT Architecture advise and high-level solution design for retail pharmacy business"
          showReadMore="false"
        />
      </div>
    </section>
  );
};

export default CaseStudies;
