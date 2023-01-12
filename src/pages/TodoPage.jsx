import { useState } from 'react';
import TasksContent from '../components/TasksContent/TasksContent';
import TodoSidebar from '../components/TodoSidebar/TodoSidebar';

const TodoPage = () => {
  const [currentOption, setCurrentOption] = useState('task-list');
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
  let visibleTasks = tasks;
  switch(currentOption) {
      case 'task-list':
        visibleTasks = tasks;
        break;
      case 'favorites':
        visibleTasks = tasks.filter(task => task.isFavorite);
        break;
      case 'completed':
        visibleTasks = tasks.filter(task => task.isDone);
        break;
      case 'uncompleted':
        visibleTasks = tasks.filter(task => !task.isDone);
        break;
      default:
        visibleTasks = tasks;
  }
  return (
    <div className="TodoPage">
      <div className="TodoPage__container">
        <TodoSidebar
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}/>
        <TasksContent
          tasks={visibleTasks}
          setTasks={setTasks}/>
      </div>
    </div>
  );
};

export default TodoPage;