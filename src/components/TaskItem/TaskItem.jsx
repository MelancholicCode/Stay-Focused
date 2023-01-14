import { useEffect, useRef, useState } from "react";

const TaskItem = ({task, onDoneTask, editTask, onFavoriteTask, onDeleteTask}) => {
  const [inputValue, setInputValue] = useState(task.text);
  const [isInputActive, setInputActive] = useState(false);

  const input = useRef(null);

  useEffect(() => {
    if (isInputActive) {
      input.current.focus();
    }
  }, [isInputActive]);

  const onEditTask = () => {
    if (inputValue.length) {
      editTask(inputValue, task.id)
    } else {
      setInputValue(task.text)
    }
    setInputActive(false)
  }

  return (
    <li className="tasks__item">
      <div className={`tasks__item-text ${isInputActive ? 'tasks__item-text_active' : null}`}>
        <input
          ref={input}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onBlur={onEditTask}
          className="tasks__item-input"
          type="text"/>
        <input
          className="tasks__item-checkbox"
          onChange={() => onDoneTask(task.id)}
          checked={task.isDone}
          type="checkbox" name="task-checkbox" id={task.id} />
        <p
          onClick={() => setInputActive(true)}
          className="tasks__item-value">
          {task.text}
        </p>
      </div>
      <div className="tasks__item-buttons">
        <svg
          onClick={() => onFavoriteTask(task.id)}
          className={`tasks__item-favorite-btn ${task.isFavorite ? 'tasks__item-favorite-btn_active' : null}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
          <path d="M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1Zm-3.9-15ZM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48Z"/>
        </svg>
        <svg
          onClick={() => onDeleteTask(task.id)}
          className="tasks__item-delete-btn"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
          <path d="M216 48h-40v-8a24.1 24.1 0 0 0-24-24h-48a24.1 24.1 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/>
        </svg>
      </div>
    </li>
  );
}

export default TaskItem;