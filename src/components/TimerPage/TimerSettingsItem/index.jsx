import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRange } from '../Timer/timerSlice';

const TimerSettingsItem = ({mode}) => {
  const dispatch = useDispatch();
  const {timerActive} = useSelector(state => state.timer);
  const [timer, setTimer] = useState(null);
  const [rangeValue, setRangeValue] = useState(mode.value);

  const onChangeRange = (value) => {
    setRangeValue(value);
    clearTimeout(timer);
    setTimer(setTimeout(() => dispatch(changeRange({name: mode.name, value})), 500));
  }

  return (
    <li
      className="timer-settings__item"
      key={mode.name}>
      <label htmlFor={mode.name} className="timer-settings__label">{`${mode.title}: ${mode.value} мин.`}</label>
      <input disabled={timerActive} className='timer-settings__range' min="1" max="120" value={rangeValue} onChange={(e) => onChangeRange(e.target.value, mode.setFunc)} type="range" name="timer-mode" id={mode.name}/>
    </li>
  );
};

export default TimerSettingsItem;