import { KafLifeLogo } from 'assets/icons';
import style from './splash.module.scss';
import classNames from 'classnames';

export default function Splash() {
  return (
    <div className={style.splashWrapper}>
      <div
        className={classNames(
          style.splashContainer,
          'animate__animated animate__zoomIn '
        )}
      >
        <KafLifeLogo className='animate__animated animate__fadeIn animate__fadeOut delay-200  ' />
        <h2 className='animate__animated animate__fadeInUp animate__fadeOut delay-200'>
          Welcome to KAF Life!
        </h2>
      </div>
    </div>
  );
}
