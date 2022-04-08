import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './checkmail.module.scss';
export default function CheckYourMail() {
  return (
    <AnimatedBg>
      <div className={style.checkMailWrapper}>
        <div className={style.checkMailContainer}>
          <KafLifeTextLogo />
          <img src={require('../../assets/images/check_mail_img.png')} />
          <h1>Please check your email!</h1>
          <p>
            Please check your inbox for further instructions. Some emails can go
            to SPAM folder in order to prevent communication loss, please check
            this folder too.
          </p>
          <button>Continue</button>
          <KafLifeLogo />
          <Footer />
        </div>
      </div>
    </AnimatedBg>
  );
}
