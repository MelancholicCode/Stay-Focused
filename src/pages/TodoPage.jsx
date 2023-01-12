import { useState } from 'react';
import TasksContent from '../components/TasksContent/TasksContent';
import TodoSidebar from '../components/TodoSidebar/TodoSidebar';

const TodoPage = () => {
  const [currentOption, setCurrentOption] = useState('task-list');
  const [searchQuery, setSearchQuery] = useState('');
  const [timer, setTimer] = useState(null);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Какое-то дело',
      isDone: false,
      isFavorite: false
    },
    {
      id: 2,
      text: 'Еще одно дело',
      isDone: false,
      isFavorite: false
    },
    {
      id: 3,
      text: 'И еще одно дело',
      isDone: false,
      isFavorite: false
    }
  ]);
  let filteredTasks = tasks;

  switch(currentOption) {
      case 'task-list':
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

  const searchTasks = (value) => {
    clearTimeout(timer);
    setTimer(setTimeout(() => setSearchQuery(value), 1000));
  }

  let searchedFilteredTasks = filteredTasks.filter(task => task.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="TodoPage">
      <div className="TodoPage__container">
        <TodoSidebar
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
          searchTasks={searchTasks}
          setSearchQuery={setSearchQuery}/>
        <TasksContent
          tasks={searchedFilteredTasks}
          setTasks={setTasks}/>
      </div>
    </div>
  );
};

export default TodoPage;