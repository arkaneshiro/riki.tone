import React from 'react';
import styles from '../styles/Canvas.module.css';
import ModEnvelope from './ModEnvelope';
import GainEnvelope from './GainEnvelope';
import Oscillator from './Oscillator';

export const Canvas = props => {

  var context = new AudioContext();

  var outputGain = context.createGain();
  outputGain.gain.value = 0;
  outputGain.connect(context.destination);

  var osc1Gain = context.createGain();
  osc1Gain.gain.value = 0;
  osc1Gain.connect(outputGain);

  var osc = context.createOscillator();
  osc.frequency.value = 440;
  osc.connect(osc1Gain);
  osc.start(0);




  var osc2Gain = context.createGain();
  osc2Gain.gain.value = 80;
  osc2Gain.connect(osc.frequency);

  var osc2 = context.createOscillator();
  osc2.frequency.value = 440;
  osc2.connect(osc2Gain);
  osc2.start(0);


  const updateOutputGain = e => {
    outputGain.gain.value = e.target.value/1000;
  }

  return (
    <>
      <h1 className={styles.title}>
        riki.tone
      </h1>
      <Oscillator name="osc2" oscillator={osc2} gain={osc2Gain}/>
      <ModEnvelope name="osc2->osc1fm env" envTarget={osc2Gain} audioContext={context} maxRange={8000}/>
      <GainEnvelope name="osc1 vol env" envTarget={osc1Gain} audioContext={context}/>
      <div>output gain</div>
      <input type="range" min="0" max="1000" defaultValue="0" onChange={updateOutputGain}></input>
    </>

  );
};

export default Canvas;
