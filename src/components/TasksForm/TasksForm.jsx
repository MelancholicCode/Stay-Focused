import React, { useState } from 'react';

const TasksForm = ({setFormActive, addTask}) => {
  const [formInput, setFormInput] = useState('');

  const onCloseForm = () => {
    setFormActive(false);
    setFormInput('');
  }

  const onAddTask = (e) => {
    console.log('Таска')
    e.preventDefault();
    if (!formInput.length) {
      /* Здесь сделать включение анимации на обертке
      в виде увеличения яркости и уменьшения ее */
      return
    }
    addTask(formInput);
    onCloseForm();
  }

  return (
    <form
      onSubmit={e => onAddTask(e)}
      className="tasks__form">
      <div className="tasks__form-input-wrapper">
        <input
          onChange={e => setFormInput(e.target.value)}
          value={formInput}
          type="text"
          className="tasks__form-input" />
      </div>
      <button
        className="tasks__form-btn"
        type="submit">Сделать запись</button>
      <span
        onClick={onCloseForm}
        className='tasks__form-close'></span>
    </form>
  );
};

export default TasksForm;