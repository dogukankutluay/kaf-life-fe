import React from 'react';
import style from './footer.module.scss';
export default function Footer() {
  return (
    <ul className={style.footerWrapper}>
      <li>
        <a href='#'>Terms & Conditions</a>
      </li>
      <li>
        <a href='#'>Privacy Policy</a>
      </li>
    </ul>
  );
}
