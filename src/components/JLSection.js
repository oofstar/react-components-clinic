import React from 'react'
import Leaguer from './Leaguer'

const JLSection = props => {

  let superClick = (event) => {
    alert("POW")
  }

  let justiceLeague = props.justiceLeague.map(leaguer => {
    return(
    <Leaguer
      superClick={superClick}
      key={leaguer.id}
      leaguer={leaguer}
    />
  )
  })

  return(
    <div className="row">
      {justiceLeague}
    </div>
  )
}

export default JLSection
