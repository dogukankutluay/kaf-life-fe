// import Splash from 'components/splash';
import React from 'react';
import { useSelector } from 'react-redux';
import style from './home.module.scss';
export default function Home() {
  document.title = 'Kaf Life';
  const redirect = useSelector((state) => state.authReducer.redirect);
  return (
    <iframe
      src={redirect}
      frameborder='0'
      title='homepage'
      className={style.frame}
    ></iframe>
  );
}
