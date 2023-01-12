import { Link } from "react-router-dom";
import "./Header.scss";
import optionsIcon from "../../img/icons/options-icon.svg";

const Header = () => {
  const linkItems = [
    {path: '/todo', title: 'Todo'},
    {path: '/music', title: 'Музыка'},
    {path: '/timer', title: 'Таймер'},
  ];

  return (
    <div className='header'>
      <div className="header__container">
        <div className="header__section-title">
          <div className="header__section-icon"></div>
          <p className="header__section-text">Название</p>
        </div>
        <nav>
          <ul className="header__link-list">
            {linkItems.map(item => (
              <li className="header__link-item">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/settings">
          <svg className="header__options-btn" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <path d="m9.25 22l-.4-3.2q-.325-.125-.612-.3q-.288-.175-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375q.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3q.287.175.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375q-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;