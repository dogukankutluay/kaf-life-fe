import Splash from 'components/splash';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './home.module.scss';
export default function Home() {
  document.title = 'Kaf Life';
  const [load, setLoad] = useState(true);
  const redirect = useSelector((state) => state.authReducer.redirect);
  useEffect(() => {
    setTimeout(() => setLoad(false), 1000);
  }, []);

  {
    return load ? (
      <Splash />
    ) : (
      <iframe
        src={redirect}
        frameborder='0'
        title='homepage'
        className={style.frame}
      ></iframe>
    );
  }
}
