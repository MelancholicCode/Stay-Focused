import { useEffect, useRef, useState } from 'react';
import { getZero } from '../../utils/digits';
import './Timer.scss';

const Timer = ({currentMode}) => {
  const [timerActive, setTimerActive] = useState(false);
  const [minutesCount, setMinutesCount] = useState(currentMode.value);
  const [secondsCount, setSecondsCount] = useState('00');

  const timerRef = useRef();

  useEffect(() => {
    clearTimer(timerRef.current);
    setMinutesCount(currentMode.value);
    setSecondsCount('00');
  }, [currentMode]);

  const clearTimer = (timerId) => {
    clearInterval(timerId);
    setTimerActive(false);
    setMinutesCount(currentMode.value);
    setSecondsCount('00');
  }

  const onToggleTimer = () => {
    if (timerActive) {
      clearTimer(timerRef.current)
      return;
    }
    setTimerActive(true);
    const deadline = Date.parse(new Date()) + currentMode.value * 1000 * 60;
    const calcTimer = () => {
      if (deadline < new Date()) {
        clearTimer(timerRef.current)
        return;
      }
      const timeLeft = deadline - new Date();
      setMinutesCount(getZero(Math.floor(timeLeft / (1000 * 60))));
      setSecondsCount(getZero(Math.floor(timeLeft / 1000 % 60)));
    }
    calcTimer();
    timerRef.current = setInterval(calcTimer, 1000);
  }

  return (
    <div
      onClick={() => onToggleTimer()}
      className="timer">
      <div className="timer__content">
        <p className="timer__count">{`${minutesCount}:${secondsCount}`}</p>
        <p className="timer__current-mode">Режим: {currentMode.title}</p>
        <p className="timer__text">{timerActive ? 'Стоп' : 'Старт'}</p>
      </div>
    </div>
  );
};

export default Timer;