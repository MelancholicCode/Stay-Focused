import TasksContent from '../components/TasksContent/TasksContent';
import Header from '../components/Header/Header';

const TodoPage = () => {

  return (
    <div className="TodoPage">
      <Header/>
      <div className="TodoPage__container">
        <TasksContent/>
      </div>
    </div>
  );
};

export default TodoPage;