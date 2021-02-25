import React, {useState} from 'react';
// import styles from '../styles/ModEnvelope.module.css';


export const ModEnvelope = ({name, triggerEnvelope, envTarget, audioContext, maxRange, ...props}) => {
  const [attack, setAttack] = useState(10);
  const [decay, setDecay] = useState(10);
  const [amount, setAmount] = useState(0);

  const updateState = cb => e => cb(e.target.value);

  const clickHandler = () => {
    triggerEnvelope(audioContext, envTarget, amount*1000, attack, decay, envTarget.gain.value)
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
      <button onClick={clickHandler}>manual trig</button>
    </>

  );
};

export default ModEnvelope;
