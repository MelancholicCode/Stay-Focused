import React, { useState } from 'react';

const TimerSettingsItem = ({mode}) => {
  const [timer, setTimer] = useState(null);
  const [rangeValue, setRangeValue] = useState(mode.value);

  const onChangeRange = (value, setFunc) => {
    setRangeValue(value);
    clearTimeout(timer);
    setTimer(setTimeout(() => setFunc(value), 500));
  }

  return (
    <li
      className="timer-settings__item"
      key={mode.name}>
      <label htmlFor={mode.name} className="timer-settings__label">{`${mode.title}: ${mode.value} мин.`}</label>
      <input className='timer-settings__range' min="1" max="120" value={rangeValue} onChange={(e) => onChangeRange(e.target.value, mode.setFunc)} type="range" name="timer-mode" id={mode.name}/>
    </li>
  );
};

export default TimerSettingsItem;