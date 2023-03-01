import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const ServicesCard = (props) => {
  const redirect = `/industries/${props.industry}`;
  const cardNumber = props.number;
  let title = '';

  let cardContent = {
    l1: '',
    l2: '',
    l3: '',
    l4: '',
    l5: '',
    l6: '',
    l7: '',
  };

  if (cardNumber == 1) {
    title = 'TRADING & RISK MANAGEMENT';
    cardContent.l1 =
      'Expertise in Electricity, Natural gas, Emissions, Renewables, NGL, Crude oil and Asphalt markets';
    cardContent.l2 =
      'Asset valuation – Gross Margin, EBITDA Analysis, Fundamentals and Stochastic Modeling';
    cardContent.l3 = 'Trading Systems Selection and Implementation';
    cardContent.l4 = 'Contracts and Trade book Forensic Analysis and Audits';
    cardContent.l5 = 'Trade Mandate, Risk Management Policies and Procedures';
    cardContent.l6 =
      'Potential Future collateral, margining and Credit Risk Management.';
    cardContent.l7 = '';
  }

  if (cardNumber == 2) {
    title = 'DATA & ANALYTICS';
    cardContent.l1 = 'Digital Enablement and Cloud Transformation';
    cardContent.l2 = 'Data Warehouse and Reporting Platform Modernization';
    cardContent.l3 = 'Management Reporting and KPI Implementation and Tracking';
    cardContent.l4 =
      'Complex Data Modeling, Harmonization and Data Engineering';
    cardContent.l5 = 'Dashboards, Metrics and ad hoc Report development';
    cardContent.l6 = 'Data Science, Analytics and Insight Generation';
    cardContent.l7 = 'Machine Learning Modeling and Prediction Analysis';
  }

  if (cardNumber == 3) {
    title = 'SOFTWARE SOLUTIONS';
    cardContent.l1 = 'Custom Cloud and Mobile Applications development';
    cardContent.l2 = 'IT Landscape Evaluation ';
    cardContent.l3 = 'Systems Design and Integration';
    cardContent.l4 = 'Test Strategy and Integrated end-to-end Testing';
    cardContent.l5 =
      'Evaluation of platform and functional scalability and scoring of Business Value';
    cardContent.l6 = 'Application Managed Services';
    cardContent.l7 = '';
  }

  return (
    <div class="meal card-service">
      <Player
        src={props.url}
        className="player meal-img"
        loop
        autoplay
        // style={{ height: '20rem', width: '20rem' }}
        speed={2}
      />
      <div class="meal-content">
        <p class="meal-title">{title}</p>
        <ul class="meal-attributes">
          {cardContent.l1 != '' && (
            <li class="list-item">
              {/* <ion-icon class="list-icon" name="checkmark-outline"></ion-icon> */}
              <span>{cardContent.l1}</span>
            </li>
          )}
          {cardContent.l2 != '' && (
            <li class="list-item">
              {/* <ion-icon class="list-icon" name="checkmark-outline"></ion-icon> */}
              <span>{cardContent.l2}</span>
            </li>
          )}
          {cardContent.l3 != '' && (
            <li class="list-item">
              {/* <ion-icon class="list-icon" name="checkmark-outline"></ion-icon> */}
              <span>{cardContent.l3}</span>
            </li>
          )}
          {cardContent.l4 != '' && (
            <li class="list-item">
              {/* <ion-icon class="list-icon" name="checkmark-outline"></ion-icon> */}
              <span>{cardContent.l4}</span>
            </li>
          )}
          {cardContent.l5 != '' && (
            <li class="list-item">
              {/* <ion-icon class="list-icon" name="checkmark-outline"></ion-icon> */}
              <span>{cardContent.l5}</span>
            </li>
          )}
          {cardContent.l6 != '' && (
            <li class="list-item">
              {/* <ion-icon class="list-icon" name="checkmark-outline"></ion-icon> */}
              <span>{cardContent.l6}</span>
            </li>
          )}
          {cardContent.l7 != '' && (
            <li class="list-item">
              {/* <ion-icon class="list-icon" name="checkmark-outline"></ion-icon> */}
              <span>{cardContent.l7}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
