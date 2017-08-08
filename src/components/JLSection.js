import React from 'react';
import JLTile from './JLTile';

const JLSection = props => {
  let leaguers = props.justiceLeague.map(leaguer => {
    return(
      <JLTile
        key={leaguer.id}
        leaguer={leaguer}
      />
    )
  })

  return(
    <div className="row">
      <h2>Justice League</h2>
      {leaguers}
    </div>
  )
}

export default JLSection;
