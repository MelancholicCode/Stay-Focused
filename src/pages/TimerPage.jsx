import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../components/TimerPage/Timer';
import { changeMode } from '../components/TimerPage/Timer/timerSlice';
import TimerSettingsItem from '../components/TimerPage/TimerSettingsItem';
import ArrowIcon from '../img/icons/component-icons/ArrowIcon';

const TimerPage = () => {
  const [settingsActive, setSettingsActive] = useState(false);
  const dispatch = useDispatch();
  const {
    timerActive,
    currentModeName,
    focus,
    rest,
    longRest
  } = useSelector(state => state.timer);

  const focusModes = [
    {name: 'focus', title: 'Фокус', value: focus},
    {name: 'rest', title: 'Отдых', value: rest},
    {name: 'longRest', title: 'Длинный отдых', value: longRest},
  ];
  const currentMode = focusModes.find(mode => mode.name === currentModeName);

  return (
    <div className='TimerPage page'>
      <div className="TimerPage__container">
        <div className="TimerPage__content">
          <div
            className={settingsActive ? 'timer-settings timer-settings_active' : 'timer-settings'}>
            <div
              onClick={() => setSettingsActive(prev => !prev)}
              className="timer-settings__box">
              <p className="timer-settings__title">Настройка длительности</p>
              <ArrowIcon
                clazz={'timer-settings__icon'}/>
            </div>
            <ul className="timer-settings__list">
              {focusModes.map(mode => (
                <TimerSettingsItem
                  key={mode.name}
                  mode={mode}/>
              ))}
            </ul>
          </div>
          <Timer
            currentMode={currentMode}/>
          <div className="TimerPage__modes">
            {focusModes.map(mode => {
              let clazz = 'TimerPage__mode-item';
              if (mode.name === currentMode.name) {
                clazz += ' TimerPage__mode-item_active';
              }
              return (
                <button
                  onClick={() => dispatch(changeMode(mode.name))}
                  className={clazz}
                  key={mode.name}
                  disabled={timerActive}>
                  {mode.title}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;