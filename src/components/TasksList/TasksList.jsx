import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TasksList = ({tasks, onDoneTask, editTask, onFavoriteTask, onDeleteTask}) => {
  return (
    <ul className="tasks__list">
      {tasks.length
        ? tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDoneTask={onDoneTask}
              editTask={editTask}
              onFavoriteTask={onFavoriteTask}
              onDeleteTask={onDeleteTask}/>
          )).reverse()
        : <p>Список дел пуст</p>
      }
    </ul>
  );
};

export default TasksList;