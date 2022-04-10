import { BackArrowIcon, KafPayLogo } from 'assets/icons';
import React from 'react';
import style from './header.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };
  return (
    <div
      className={classNames(
        style.headerWrapper,
        'animate__animated animate__slideInLeft delay-100'
      )}
    >
      <BackArrowIcon onClick={onClick} className={style.arrowButton} />
      <KafPayLogo />
    </div>
  );
}
