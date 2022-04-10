import languages from 'constants/lang';
import React from 'react';
import { useSelector } from 'react-redux';
import style from './footer.module.scss';
export default function Footer() {
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].footer
  );
  return (
    <footer className='animate__animated animate__fadeInLeft delay-600'>
      <ul className={style.footerWrapper}>
        <li>
          <a href='/'>{lang.terms}</a>
        </li>
        <li>
          <a href='/'>{lang.privacy}</a>
        </li>
      </ul>
    </footer>
  );
}
