import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
      <div className="header__container">
        <div className="header__section-title">
          <div className="header__section-icon"></div>
          <p className="header__section-text">Название</p>
        </div>
        <nav>
          <ul className="header__link-list">
            <li className="header__link-item">
              Todo
            </li>
            <li className="header__link-item">
              Музыка
            </li>
            <li className="header__link-item">
              Таймер
            </li>
          </ul>
        </nav>
        <div className="header__options-btn">Тут опции будут</div>
      </div>
    </div>
  );
};

export default Header;