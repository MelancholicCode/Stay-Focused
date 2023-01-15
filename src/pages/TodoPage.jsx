import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TasksContent from '../components/TasksContent/TasksContent';
import TodoSidebar from '../components/TodoSidebar/TodoSidebar';

const TodoPage = () => {
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

  const searchTasks = (value) => {
    clearTimeout(timer);
    setTimer(setTimeout(() => setSearchQuery(value), 1000));
  }

  return (
    <main className="TodoPage page">
      <div className="TodoPage__container">
        <TodoSidebar
          searchTasks={searchTasks}
          setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route index element={
            <TasksContent
              tasks={tasks}
              searchQuery={searchQuery}
              setTasks={setTasks}/>
            }/>
          <Route path=':currentFilter' element={
              <TasksContent
                tasks={tasks}
                searchQuery={searchQuery}
                setTasks={setTasks}/>
            }/>
        </Routes>
      </div>
    </main>
  );
};

export default TodoPage;