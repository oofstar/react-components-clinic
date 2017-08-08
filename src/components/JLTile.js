import React from 'react';

const JLTile = props => {
  return(
    <div className="columns small-4">
      <h4>{props.leaguer.name}</h4>
      <p>Super Powers: {props.leaguer.powers}</p>
      <p>True Identity: {props.leaguer.trueIdentity}</p>
      <img src={`${props.leaguer.image}`} />
    </div>
  )
}

export default JLTile;
