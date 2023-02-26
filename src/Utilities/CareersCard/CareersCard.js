import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Overlay from '../../components/Overlay/Overlay';
import ApplyForm from '../../components/ApplyForm/ApplyForm';

const CareersCard = (props) => {
  const redirect = `/careers/${props.careers}`;
  // const [newPostOverlay, setNewPostOverlay] = useState(false);

  // const newPostOverlayHandler = () => {
  //   setNewPostOverlay(!newPostOverlay);
  // };

  return (
    <div class="meal">
      {/* {newPostOverlay && (
        <Overlay>
          <ApplyForm newPostOverlayHandler={newPostOverlayHandler} />
        </Overlay>
      )} */}
      <div class="meal-content">
        <p class="meal-title career-title">{props.title}</p>
        <div class="meal-tags">
          <div className="careers-icon-box">
            <ion-icon
              name="location-outline"
              class="feature-icon career-icon"
            ></ion-icon>
            <h3 className="heading-contact heading-careers">
              {props.location}
            </h3>
          </div>
          <div className="careers-icon-box">
            <ion-icon
              name="business-outline"
              class="feature-icon career-icon"
            ></ion-icon>
            <h3 className="heading-contact heading-careers">{props.field}</h3>
          </div>
          <div className="careers-icon-box">
            <ion-icon
              name="document-text-outline"
              class="feature-icon career-icon"
            ></ion-icon>
            <h3 className="heading-contact heading-careers">
              {props.contract}
            </h3>
          </div>
        </div>
        <div className="career-border"></div>
        <h4 className="heading-title">{props.subheading}</h4>
        <ul class="meal-attributes careersPageCard">
          <li class="meal-attribute">
            <span>{props.shortDesc1}</span>
          </li>
          <li class="meal-attribute">
            <span>{props.shortDesc2}</span>
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
          <button
            className="btn btn--full btn-card btn--apply"
            onClick={props.newPostOverlayHandler}
          >
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
};

export default CareersCard;
