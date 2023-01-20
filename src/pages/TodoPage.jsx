import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import TasksContent from '../components/TodoPage/TasksContent';
import TodoSidebar from '../components/TodoPage/TodoSidebar';

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
    },
  ]);
  const [searchInput, setSearchInput] = useState('');

  const searchTasks = (value) => {
    clearTimeout(timer);
    setTimer(setTimeout(() => setSearchQuery(value), 1000));
  }

  const onChangeOption = () => {
    setSearchInput('');
    setSearchQuery('');
  }

  return (
    <main className="TodoPage page">
      <div className="TodoPage__container">
        <TodoSidebar
          onChangeOption={onChangeOption}/>
        <Routes>
          <Route index element={
            <TasksContent
              tasks={tasks}
              searchQuery={searchQuery}
              setTasks={setTasks}
              searchTasks={searchTasks}
              searchInput={searchInput}
              setSearchInput={setSearchInput}/>
            }/>
          <Route path=':currentFilter' element={
              <TasksContent
                tasks={tasks}
                searchQuery={searchQuery}
                setTasks={setTasks}
                searchTasks={searchTasks}
                searchInput={searchInput}
                setSearchInput={setSearchInput}/>
            }/>
        </Routes>
      </div>
    </main>
  );
};

export default TodoPage;