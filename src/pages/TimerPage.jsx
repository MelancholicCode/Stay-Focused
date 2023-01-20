import { useState } from 'react';
import Timer from '../components/TimerPage/Timer';
import TimerSettingsItem from '../components/TimerPage/TimerSettingsItem';
import ArrowIcon from '../img/icons/component-icons/ArrowIcon';

const TimerPage = () => {
  const [settingsActive, setSettingsActive] = useState(false);
  const [currentModeName, setCurrentModeName] = useState('focus');
  const [focusRange, setFocusRange] = useState(30);
  const [restRange, setRestRange] = useState(5);
  const [longRestRange, setLongRestRange] = useState(15);
  const focusModes = [
    {name: 'focus', title: 'Фокус', value: focusRange, setFunc: setFocusRange},
    {name: 'rest', title: 'Отдых', value: restRange, setFunc: setRestRange},
    {name: 'long-rest', title: 'Длинный отдых', value: longRestRange, setFunc: setLongRestRange},
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
          <ul className="TimerPage__mode-list">
            {focusModes.map(mode => {
              let clazz = 'TimerPage__mode-item';
              if (mode.name === currentMode.name) {
                clazz += ' TimerPage__mode-item_active';
              }
              return (
                <li
                  onClick={() => setCurrentModeName(mode.name)}
                  className={clazz}
                  key={mode.name}>
                  {mode.title}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;