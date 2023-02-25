import React from 'react';
import { Link } from 'react-router-dom';

const CareersCard = (props) => {
  const redirect = `/industries/${props.industry}`;
  return (
    <div class="meal">
      {/* <img
        src={process.env.PUBLIC_URL + '/content/imgs/' + props.image}
        class="meal-img"
        alt="Japanese Gyozas"
      /> */}
      <div class="meal-content">
        <p class="meal-title career-title">
          Systems Development Engineer, Augmented Reality Data Capture
          Infrastructure{' '}
        </p>
        <div class="meal-tags">
          <div className="careers-icon-box">
            <ion-icon
              name="location-outline"
              class="feature-icon career-icon"
            ></ion-icon>
            <h3 className="heading-contact heading-careers">Zeus Solutions</h3>
          </div>
          <div className="careers-icon-box">
            <ion-icon
              name="business-outline"
              class="feature-icon career-icon"
            ></ion-icon>
            <h3 className="heading-contact heading-careers">Zeus Solutions</h3>
          </div>
          <div className="careers-icon-box">
            <ion-icon
              name="document-text-outline"
              class="feature-icon career-icon"
            ></ion-icon>
            <h3 className="heading-contact heading-careers">Zeus Solutions</h3>
          </div>
        </div>
        <div className="career-border"></div>
        <ul class="meal-attributes">
          <li class="meal-attribute">
            <span>
              Zeus is looking for Software engineers specializing in Software
              Quality Testing and Security Assurance. Engineers with Quality
              expertise, to be able to lead a small team of analysts performing
              testing, debugging, developing automation in oil, gas, and
              multi-domain telemetry.
            </span>
          </li>
        </ul>
        {props.showReadMore != 'false' && (
          <Link
            to={redirect}
            className="btn btn--full btn-card margin-right-sm"
          >
            Read More
          </Link>
        )}
        {props.showApplyNow != 'false' && (
          <Link to={redirect} className="btn btn--full btn-card btn--apply">
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default CareersCard;
