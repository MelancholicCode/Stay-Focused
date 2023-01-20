import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getZero } from '../../../utils/digits';
import './Timer.scss';
import { setTimerActive, setTimerCount, setTimerId } from './timerSlice';

const Timer = ({currentMode}) => {
  const dispatch = useDispatch();
  const {timerActive, timerCount, timerId} = useSelector(state => state.timer);

  const timerRef = useRef(timerId);

  useEffect(() => {
    if (!timerActive) {
      dispatch(setTimerCount(`${currentMode.value}:00`))
    }
  }, [currentMode])

  const clearTimer = (timerId) => {
    clearInterval(timerId);
    timerRef.current = null;
    dispatch(setTimerId(timerRef.current));
    dispatch(setTimerActive(false));
    dispatch(setTimerCount(`${currentMode.value}:00`));
  }

  const calcTimer = (deadline) => {
    if (deadline < new Date()) {
      clearTimer(timerRef.current);
      return;
    }
    const timeLeft = deadline - new Date();
    dispatch(setTimerCount(`
      ${getZero(Math.floor(timeLeft / (1000 * 60)))}:
      ${getZero(Math.floor(timeLeft / 1000 % 60))}
    `));
  }

  const onToggleTimer = () => {
    if (timerActive) {
      clearTimer(timerRef.current);
      return;
    }
    dispatch(setTimerActive(true));
    const deadline = Date.parse(new Date()) + currentMode.value * 1000 * 60;
    calcTimer(deadline);
    timerRef.current = setInterval(() => calcTimer(deadline), 1000);
    dispatch(setTimerId(timerRef.current));
  }

  return (
    <div
      onClick={() => onToggleTimer()}
      className={timerActive ? 'timer timer_active' : 'timer'}>
      <div className="timer__content">
        <p className="timer__count">{timerCount}</p>
        <p className="timer__current-mode">Режим: {currentMode.title}</p>
        <p className="timer__text">{timerActive ? 'Стоп' : 'Старт'}</p>
      </div>
    </div>
  );
};

export default Timer;