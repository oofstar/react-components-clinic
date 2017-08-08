import React from 'react'
import JLSection from './JLSection'
import AvengersSection from './AvengersSection'

const App = props => {
  return(
    <div className='header'>
      <h1>Justice League vs Avengers!</h1>
      <JLSection justiceLeague={props.heros.justiceLeague}/>
      <AvengersSection avengers={props.heros.avengers}/>
    </div>
  )
}

export default App
