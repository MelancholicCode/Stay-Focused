import TasksContent from '../components/TasksContent/TasksContent';
import Header from '../components/Header/Header';
import TodoSidebar from '../components/TodoSidebar/TodoSidebar';

const TodoPage = () => {

  return (
    <div className="TodoPage">
      <div className="TodoPage__container">
        <TodoSidebar/>
        <TasksContent/>
      </div>
    </div>
  );
};

export default TodoPage;