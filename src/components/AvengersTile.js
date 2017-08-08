import React from 'react';

const AvengersTile = props => {
  return(
    <div className="columns small-4">
      <h4>{props.avenger.name}</h4>
      <p>Super Powers: {props.avenger.powers}</p>
      <p>True Identity: {props.avenger.trueIdentity}</p>
      <img src={`${props.avenger.image}`} />
    </div>
  )
}

export default AvengersTile;
