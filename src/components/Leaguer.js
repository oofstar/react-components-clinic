import React from 'react'

const Leaguer = props => {

  return(
    <div className="small-4 columns">
      <h2 onClick={props.superClick}>{props.leaguer.name}</h2>
      <p>{props.leaguer.powers}</p>
      <p>{props.leaguer.trueIdentity}</p>
      <img src={props.leaguer.image}/>
    </div>
  )
}

export default Leaguer
