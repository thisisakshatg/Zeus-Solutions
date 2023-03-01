import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const redirect = `/industries/${props.industry}`;
  const l = props.links;
  return (
    <div class="meal">
      <img
        src={process.env.PUBLIC_URL + '/content/imgs/' + props.image}
        class="meal-img"
        alt="Japanese Gyozas"
      />
      <div class="meal-content">
        <p class="meal-title">{props.title}</p>
        <ul class="meal-attributes">
          <li class="meal-attribute">
            <span>{props.description}</span>
          </li>
        </ul>
        {props.showReadMore != 'false' && (
          <Link to={redirect} className="btn btn--full btn-card">
            Read More
          </Link>
        )}
        {props.homepage != 'false' && (
          <Link to={l} className="btn btn--full btn-card">
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
