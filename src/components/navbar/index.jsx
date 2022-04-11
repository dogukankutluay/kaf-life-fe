import style from './navbar.module.scss';
import { FlagTr, KafLifeTextLogo, FlagEn, ArrowDown } from 'assets/icons';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from 'redux/actions/preferencesAction';

export default function Navbar() {
  let activeLang = useSelector((state) => state.preferencesReducer.language);
  const [active, setActive] = useState(false);
  const [item, setItem] = useState(
    languages.findIndex((l) => l.code === activeLang)
  );
  let dispatch = useDispatch();
  const changeLanguage = (index) => {
    setItem(index);
    dispatch(setLanguage(languages[index].code));
  };
  return (
    <nav
      className={classNames(
        style.navbarWrapper,
        'animate__animated animate__fadeInLeftBig delay-100'
      )}
    >
      <KafLifeTextLogo />
      <div
        className={classNames(
          style.select,
          'animate__animated animate__fadeInDown delay-300'
        )}
        onClick={() => setActive(!active)}
      >
        <div className={style.head}>
          <span className={style.flag}>{languages[item].flag}</span>
          <p>{languages[item].lang}</p>
          <ArrowDown />
        </div>
        {active && (
          <div className={classNames(style.options)}>
            {languages.map((language, key) => {
              return (
                <div
                  className={style.option}
                  key={key}
                  onClick={() => changeLanguage(key)}
                >
                  <span className={style.flag}> {language.flag}</span>
                  {language.lang}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

const languages = [
  {
    flag: <FlagTr />,
    lang: 'Turkish',
    code: 'tr',
  },
  {
    flag: <FlagEn />,
    lang: 'English',
    code: 'en',
  },
];
