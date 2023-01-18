import { useMediaQuery } from "react-responsive";
import { NavLink, useMatch } from "react-router-dom";
import './TodoSidebar.scss';

const TodoSidebar = ({onChangeOption}) => {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 768px)'});
  const isMainMenu = useMatch('/todo');
  const isMenuActive = isTabletOrMobile && !isMainMenu;
  
  const taskOptions = [
    {path: 'tasks', text: 'Весь список'},
    {path: 'favorites', text: 'Избранное'},
    {path: 'uncompleted', text: 'Незавершённые'},
    {path: 'completed', text: 'Завершённые'}
  ];

  return (
    <div className={isMenuActive ? 'hide' : 'todo-sidebar'}>
    <ul className="todo-sidebar__list">
      {taskOptions.map(item => (
          <NavLink
            to={`/todo/${item.path}`}
            onClick={onChangeOption}
            className={({isActive}) => isActive ? 'todo-sidebar__item todo-sidebar__item_active' : 'todo-sidebar__item'}
            key={item.path}>
            {item.text}</NavLink>
      ))}
    </ul>
  </div>
  );
};

export default TodoSidebar;