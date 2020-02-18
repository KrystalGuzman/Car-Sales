import React from 'react';
import 'bulma/css/bulma.css';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=>{props.buyItem(props.feature)}} class="button is-dark">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
