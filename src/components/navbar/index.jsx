import React from 'react';
import style from './navbar.module.scss';
import { KafLifeTextLogo } from 'assets/icons';
export default function Navbar() {
  return (
    <nav className={style.navbarWrapper}>
      <KafLifeTextLogo />
      <select name='' id=''>
        <option value=''>English</option>
        <option value=''>Turkish</option>
      </select>
    </nav>
  );
}
