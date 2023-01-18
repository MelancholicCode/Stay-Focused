import { useState } from 'react';
import Timer from '../components/Timer/Timer';
import TimerSettingsItem from '../components/TimerSettingsItem/TimerSettingsItem';

const TimerPage = () => {
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
        <ul className="timer-settings">
          {focusModes.map(mode => (
            <TimerSettingsItem
              key={mode.name}
              mode={mode}/>
          ))}
        </ul>
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
        <Timer
          currentMode={currentMode}/>
      </div>
    </div>
  );
};

export default TimerPage;