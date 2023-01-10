import { useEffect, useRef, useState } from "react";

const TaskItem = ({task, onDoneTask, editTask}) => {
  const [isInputActive, setInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(task.text);
  const input = useRef();

  useEffect(() => {
    if (isInputActive) {
      input.current.focus();
    }
  }, [isInputActive]);

  const onActiveInput = () => {
    setInputActive(true)
  }

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
      <div className="tasks__item-text">
        {isInputActive
          ? <input
              ref={input}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onBlur={onEditTask}
              className="tasks__item-input"
              type="text"/>
          : <>
              <input
                className="tasks__item-checkbox"
                onChange={() => onDoneTask(task.id)}
                checked={task.isDone}
                type="checkbox" name="task-checkbox" id={task.id} />
              <p
                onClick={onActiveInput}
                className="tasks__item-value">
                {task.text}
              </p>
            </>}
      </div>
      <div className="tasks__item-buttons">
        
      </div>
    </li>
  );
}

export default TaskItem;