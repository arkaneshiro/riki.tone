import React from 'react';
// import styles from '../styles/Oscillator.module.css';


export const Oscillator = ({name, oscillator, gain, ...props}) => {

  const updateFreq = e => {
    oscillator.frequency.value = e.target.value;
  }

  const updateGain = e => {
    gain.gain.value = e.target.value
  }

  return (
    <>
      <div>osc2 freq</div>
      <input type="range" min="110" max="3520" onChange={updateFreq}></input>
      <div>fm amt</div>
      <input type="range" min="0" max="10000" onChange={updateGain}></input>
    </>

  );
};

export default Oscillator;
