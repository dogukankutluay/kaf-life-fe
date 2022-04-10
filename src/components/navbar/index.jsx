import style from './navbar.module.scss';
import { FlagTr, KafLifeTextLogo, FlagEn } from 'assets/icons';
import classNames from 'classnames';
export default function Navbar() {
  return (
    <nav
      className={classNames(
        style.navbarWrapper,
        'animate__animated animate__fadeInLeftBig delay-100'
      )}
    >
      <KafLifeTextLogo />
      <select name='' id=''>
        {languages.map((lang, key) => (
          <option value={lang.code} key={key}>
            {lang.lang}
          </option>
        ))}
      </select>
    </nav>
  );
}

const languages = [
  {
    flag: FlagTr,
    lang: 'Turkish',
    code: 'tr',
  },
  {
    flag: FlagEn,
    lang: 'English',
    code: 'en',
  },
];
