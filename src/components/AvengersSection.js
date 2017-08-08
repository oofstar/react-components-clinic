import React from 'react';
import AvengersTile from './AvengersTile';

const AvengersSection = props => {
  let avengers = props.avengers.map(avenger => {
    return(
      <AvengersTile
        avenger={avenger}
        key={avenger.id}
      />
    )
  })
  return(
    <div className="row">
      <h3>Avengers</h3>
      {avengers}
    </div>
  )
}

export default AvengersSection;
