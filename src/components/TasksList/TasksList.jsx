import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import emptyListImg from '../../img/empty-list.png';

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
        : <div className="tasks__empty-list">
            <img src={emptyListImg} alt="" />
            <p>Список пуст</p>
          </div>
      }
    </ul>
  );
};

export default TasksList;