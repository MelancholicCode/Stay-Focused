

const Header = () => {
  return (
    <div className='Header'>
      <div className="header__section-title">
        <div className="header__section-icon"></div>
        <p className="header__section-text"></p>
        <nav>
          <ul className="header__link-list">
            <li className="header__link-item">
              Список дел
            </li>
            <li className="header__link-item">
              Раздел 2
            </li>
            <li className="header__link-item">
              Раздел 3
            </li>
          </ul>
        </nav>
        <div className="header__options-btn">Тут опции будут</div>
      </div>
    </div>
  );
};

export default Header;