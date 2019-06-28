import React from 'react';
import puppy from '../assets/running_puppy.jpg';
import wheelUrl, { ReactComponent as Wheel } from '../assets/settings.svg';

function App() {
  return (
    <div>
      Hello all!
      <br/>
      <img src={puppy} alt="Puppy runs toward camera"/>
      <br />
      <img src={wheelUrl}/>
    </div>
  )
}

export default App;