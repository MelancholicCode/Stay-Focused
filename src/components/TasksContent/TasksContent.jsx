import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../Modal/Modal';
import TasksForm from '../TasksForm/TasksForm';
import TasksList from '../TasksList/TasksList';

const TasksContent = ({searchQuery, tasks, setTasks}) => {
  const {currentFilter} = useParams();
  const [isFormActive, setFormActive] = useState(false);

  let filteredTasks = tasks;

  switch(currentFilter) {
    case 'tasks':
      filteredTasks = tasks;
      break;
    case 'favorites':
      filteredTasks = tasks.filter(task => task.isFavorite);
      break;
    case 'completed':
      filteredTasks = tasks.filter(task => task.isDone);
      break;
    case 'uncompleted':
      filteredTasks = tasks.filter(task => !task.isDone);
      break;
    default:
      filteredTasks = tasks;
  }

  let searchedFilteredTasks = filteredTasks.filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase()));

  const addTask = (text) => {
    setTasks(prev => [...prev, {
      id: new Date(),
      text
    }])
  }

  const onDoneTask = (id) => {
    setTasks(prev => {
      const res = prev.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone;
          return task;
        }
        return task;
      })
      return res;
    });
  }

  const editTask = (text, id) => {
    setTasks(prev => {
      return prev.map(task => {
        if (task.id === id) {
          task.text = text;
          return task;
        }
        return task;
      })
    })
  }

  const onFavoriteTask = (id) => {
    setTasks(prev => {
      return prev.map(task => {
        if (task.id === id) {
          task.isFavorite = !task.isFavorite;
          return task;
        }
        return task;
      })
    })
  }

  const onDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  return (
    <div className="tasks">
      <Modal
        isActive={isFormActive}
        setIsActive={setFormActive}>
        <TasksForm
          addTask={addTask}
          isActive={isFormActive}
          setFormActive={setFormActive}/>
      </Modal>
      <div
        onClick={() => setFormActive(true)}
        className="tasks__create-btn">Создать занятие</div>
      <TasksList
        tasks={searchedFilteredTasks}
        onDoneTask={onDoneTask}
        editTask={editTask}
        onFavoriteTask={onFavoriteTask}
        onDeleteTask={onDeleteTask}/>
    </div>
  );
};

export default TasksContent;