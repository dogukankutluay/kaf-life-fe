import { BackArrowIcon, KafPayLogo } from 'assets/icons';
import React from 'react';
import style from './header.module.scss';
export default function Header({ onClick = () => {} }) {
  return (
    <div className={style.headerWrapper}>
      <BackArrowIcon onClick={onClick} className={style.arrowButton} />
      <KafPayLogo />
    </div>
  );
}
