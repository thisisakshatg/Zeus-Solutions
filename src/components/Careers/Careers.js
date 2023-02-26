import React, { useState } from 'react';
import CareersCard from '../../Utilities/CareersCard/CareersCard';
import Header from '../Header/Header';

import Overlay from '../../components/Overlay/Overlay';
import ApplyForm from '../../components/ApplyForm/ApplyForm';

const Careers = () => {
  const [newPostOverlay, setNewPostOverlay] = useState(false);

  const newPostOverlayHandler = () => {
    setNewPostOverlay(!newPostOverlay);
  };

  return (
    <section className="section-careers-page">
      {newPostOverlay && (
        <Overlay>
          <ApplyForm newPostOverlayHandler={newPostOverlayHandler} />
        </Overlay>
      )}
      <div className="full-img img-careers">
        <Header />
        <section class="section-contact-us">
          <div class="container">
            <h1 className="heading-primary contact-primary">Careers</h1>
          </div>
        </section>
      </div>
      <p
        class="container feature-text feature-service-2"
        style={{ marginTop: '-3.6rem' }}
      >
        Zeus Solutions Inc is a Houston based consulting boutique that
        specializes in delivering technology and risk management solutions to
        Oil, Gas, Commodities, Energy Trading, Retail and Utility clients. Our
        consultants are regarded as high value-add, insight oriented, business
        proposition focused delivery team.
      </p>
      <p
        class="container feature-text feature-service-2"
        style={{ marginBottom: '3.6rem' }}
      >
        We constantly update great job opportunities here. Be sure to visit this
        page often. If you do not find a job that matches your skillset, submit
        your current resume at hr@zeussolutionsinc.com. We will reach out to you
        when we find an ideal match.
      </p>
      <div className="container">
        <CareersCard
          careers="quality-assurance-analyst"
          title="Quality Assurance Analyst / Engineer"
          shortDesc1="● 3+ years of experience developing, executing and analyzing automation tests. Hands on experience using Selenium, Java, Javascript"
          shortDesc2="● Experience testing APIs and data integrations."
          field="Oil and Gas"
          location="Houston, TX"
          contract="Long Term Contract"
          subheading="Job duties include:"
          newPostOverlayHandler={newPostOverlayHandler}
          newPostOverlay={newPostOverlay}
        />
        <CareersCard
          careers="software-engineer"
          title="Software Engineer"
          shortDesc1="● Plan and execute unit, integration, and acceptance testing."
          shortDesc2="● Develop, identify, evaluate, analyze: functional and technical specifications, software solutions, systems specifications, and procedures to meet business requirements."
          field="Oil and Gas"
          location="Houston, TX"
          contract="Long Term Contract"
          subheading="Job duties include:"
          newPostOverlayHandler={newPostOverlayHandler}
        />
        <CareersCard
          careers="data-engineer"
          title="Data Engineer"
          shortDesc1="● Create and maintain optimal data pipeline architecture."
          shortDesc2="● Assemble large, complex data sets that meet functional / non-functional business requirements."
          field="Oil and Gas"
          location="Houston, TX"
          contract="Long Term Contract"
          subheading="Responsibilities for Data Engineer:"
          newPostOverlayHandler={newPostOverlayHandler}
        />
        <CareersCard
          careers="aws-data-engineer"
          title="AWS Data Engineer"
          shortDesc1="● Python-5 years experience (Expert skill level)- must have additional experience with Go – NodeJS helpful"
          shortDesc2="● Spark (Java, or Python) -3 years experience (Expert skill level) – Spark, Pyspark experience"
          field="Oil and Gas"
          location="Houston, TX"
          contract="Long Term Contract"
          subheading="Responsibilities for AWS Data Engineer:"
          newPostOverlayHandler={newPostOverlayHandler}
        />
        <CareersCard
          careers="data-scientist"
          title="Data Scientist"
          shortDesc1="● Good analytical and problem-solving abilities."
          shortDesc2="● Experience using statistical computer languages (R, Python, SLQ, etc.) to manipulate data and draw insights from large data sets."
          field="Speciality Chemicals"
          location="Houston, TX"
          contract="12 Months Contract"
          subheading="Qualifications:"
          newPostOverlayHandler={newPostOverlayHandler}
        />
        <CareersCard
          careers="spotfire-developer"
          title="Spotfire Developer"
          shortDesc1=""
          shortDesc2=""
          field="Varied"
          location="Houston, TX"
          contract="12 Months Contract"
          subheading="Send your resume to : hr@zeussolutionsinc.com"
          newPostOverlayHandler={newPostOverlayHandler}
        />
        <CareersCard
          careers="power-bi-developer"
          title="Power BI Developer"
          shortDesc1=""
          shortDesc2=""
          field="Varied"
          location="Houston, TX"
          contract="12 Months Contract"
          subheading="Send your resume to : hr@zeussolutionsinc.com"
        />
        <CareersCard
          careers="java-developer"
          title="Java - Full Stack Developer"
          shortDesc1=""
          shortDesc2=""
          field="Varied"
          location="Houston, TX"
          contract="12 Months Contract"
          subheading="Send your resume to : hr@zeussolutionsinc.com"
        />
        <CareersCard
          careers="commodities-trading-and-risk-management-business-analyst"
          title="Commodities Trading and Risk Management Business Analyst"
          shortDesc1=""
          shortDesc2=""
          field="Varied"
          location="Houston, TX"
          contract="12 Months Contract"
          subheading="Send your resume to : hr@zeussolutionsinc.com"
        />
        <CareersCard
          careers="energy-trading-and-risk-management-expert"
          title="Energy Trading and Risk Management Expert"
          shortDesc1=""
          shortDesc2=""
          field="Varied"
          location="Houston, TX"
          contract="12 Months Contract"
          subheading="Send your resume to : hr@zeussolutionsinc.com"
        />
        <CareersCard
          careers="finance-and-restructuring-expert"
          title="Finance and Restructuring Expert"
          shortDesc1=""
          shortDesc2=""
          field="Varied"
          location="Houston, TX"
          contract="12 Months Contract"
          subheading="Send your resume to : hr@zeussolutionsinc.com"
        />
      </div>
    </section>
  );
};

export default Careers;
