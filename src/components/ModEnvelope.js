import React, {useState} from 'react';
// import styles from '../styles/ModEnvelope.module.css';


export const ModEnvelope = ({name, envTarget, audioContext, maxRange, ...props}) => {
  const [attack, setAttack] = useState(10);
  const [decay, setDecay] = useState(10);
  const [amount, setAmount] = useState(0);

  const updateState = cb => e => cb(e.target.value);

  const triggerEnvelope = () => {
    const i = envTarget.gain.value;

    envTarget.gain.linearRampToValueAtTime(i + parseInt(amount), audioContext.currentTime + attack/1000)
    // todo: separate up & down to separate functions
    envTarget.gain.linearRampToValueAtTime(i, audioContext.currentTime + decay/1000 + attack/1000)
  }

  return (
    <>
      <div>{name}</div>
      <div>attack</div>
      <input type="range" min="0" max="2000" onChange={updateState(setAttack)}></input>
      <div>decay</div>
      <input type="range" min="0" max="2000" onChange={updateState(setDecay)}></input>
      <div>env amount</div>
      <input type="range" min="0" max={maxRange} onChange={updateState(setAmount)}></input>
      <button onClick={triggerEnvelope}>manual trig</button>
    </>

  );
};

export default ModEnvelope;
