import React from 'react'

const Avenger = props => {
  return(
    <div className="small-4 columns">
      <h2 onClick={props.superClick}>{props.avenger.name}</h2>
      <p>{props.avenger.powers}</p>
      <p>{props.avenger.trueIdentity}</p>
      <img src={props.avenger.image}/>
    </div>
  )
}

export default Avenger
