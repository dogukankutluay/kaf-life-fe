import { KafLifeLogo } from 'assets/icons';
import style from './splash.module.scss';
export default function Splash() {
  return (
    <div className={style.splashWrapper}>
      <div className={style.splashContainer}>
        <KafLifeLogo />
        <h2>Welcome to KAF Life!</h2>
      </div>
    </div>
  );
}
