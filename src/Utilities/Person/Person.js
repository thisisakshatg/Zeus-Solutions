import React from 'react';
import im from '../../assets/img/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';

const Person = (props) => {
  return (
    <div class="img__wrap">
      <img class="img__img" src={im} />
      <p class="img__description feature-text">This image looks super neat.</p>
    </div>
  );
};

export default Person;
