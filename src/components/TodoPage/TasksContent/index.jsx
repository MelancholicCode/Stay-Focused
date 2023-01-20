import Modal from '../../Modal';
import Search from '../Search';
import TasksForm from '../TasksForm';
import TasksList from '../TasksList';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useMatch, useParams } from 'react-router-dom';

import './TasksContent.scss';

const TasksContent = ({searchQuery, tasks, setTasks, searchTasks, searchInput, setSearchInput}) => {
  const {currentFilter} = useParams();
  const [isFormActive, setFormActive] = useState(false);

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 768px)'});
  const isMainMenu = useMatch('/todo');
  const isMenuActive = isTabletOrMobile && isMainMenu;

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
    const newTask = {
      id: new Date(),
      text,
      isDone: false,
      isFavorite: false
    };
    
    switch(currentFilter) {
      case 'tasks':
        setTasks(prev => [...prev, newTask]);
        break;
      case 'favorites':
        setTasks(prev => [...prev, {...newTask, isFavorite: true}]);
        break;
      case 'completed':
        setTasks(prev => [...prev, {...newTask, isDone: true}]);
        break;
      default:
        setTasks(prev => [...prev, newTask]);
    }
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
    <div className={isMenuActive ? 'hide' : 'tasks'}>
      <Modal
        isActive={isFormActive}
        setIsActive={setFormActive}>
        <TasksForm
          addTask={addTask}
          isActive={isFormActive}
          setFormActive={setFormActive}/>
      </Modal>
      <Search
        searchTasks={searchTasks}
        searchInput={searchInput}
        setSearchInput={setSearchInput}/>
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