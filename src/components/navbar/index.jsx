import React from 'react';
import style from './navbar.module.scss';
import { KafLifeTextLogo } from 'assets/icons';
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
        <option value=''>English</option>
        <option value=''>Turkish</option>
      </select>
    </nav>
  );
}
