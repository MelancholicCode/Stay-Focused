import MusicIcon from "../../img/icons/component-icons/MusicIcon";
import NoteIcon from "../../img/icons/component-icons/NoteIcon";
import WatchIcon from "../../img/icons/component-icons/WatchIcon";
import ArrowIcon from "../../img/icons/component-icons/ArrowIcon";

import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const linkItems = [
    {path: '/todo', icon: <NoteIcon/>},
    {path: '/music', icon: <MusicIcon/>},
    {path: '/timer', icon: <WatchIcon/>},
  ];

  return (
    <div className='header'>
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__link-list">
            {linkItems.map(item => (
              <li
                className="header__link-item"
                key={item.path}>
                <NavLink className={({isActive}) => isActive ? 'header__link header__link_active' : 'header__link'} to={item.path}>{item.icon}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__trigger">
          <ArrowIcon clazz="header__arrow-icon"/>
        </div>
      </div>
    </div>
  );
};

export default Header;