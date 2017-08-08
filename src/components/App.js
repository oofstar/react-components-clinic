import React from 'react';
import JLSection from './JLSection';
import AvengersSection from './AvengersSection';

const App = props => {
  return(
    <div>
      <h1>Super Teams</h1>
      <JLSection
      justiceLeague={props.heros.justiceLeague}
      />
      <AvengersSection
        avengers={props.heros.avengers}
      />
    </div>
  )
}

export default App;
