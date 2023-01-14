import errorPic from '../img/404.png';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className="error-page__container">
        <div className='error-page__content'>
          <img className='error-page__picture' src={errorPic} alt="" />
          <h1 className='error-page__title'>404</h1>
          <p className='error-page__text'>Такой страницы не существует</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;