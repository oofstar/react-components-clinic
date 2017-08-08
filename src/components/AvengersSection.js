import React from 'react'
import Avenger from './Avenger'

const AvengersSection = props => {
  let superClick = (event) => {
    alert("WHAM")
  }

  let avengers = props.avengers.map(avenger => {
    return(
    <Avenger
      superClick={superClick}
      key={avenger.id}
      avenger={avenger}
    />
  )
  })

  return(
    <div className="row">
      {avengers}
    </div>
  )
}

export default AvengersSection
