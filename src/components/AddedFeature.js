import React from 'react';
import 'bulma/css/bulma.css';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>props.removeFeature(props.feature)} class="button is-dark">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
