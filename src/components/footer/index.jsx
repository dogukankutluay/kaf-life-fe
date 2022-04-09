import React from 'react';
import style from './footer.module.scss';
export default function Footer() {
  return (
    <footer className='animate__animated animate__fadeInLeft delay-600'>
      <ul className={style.footerWrapper}>
        <li>
          <a href='/'>Terms & Conditions</a>
        </li>
        <li>
          <a href='/'>Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
}
