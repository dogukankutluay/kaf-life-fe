import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './success.module.scss';
export default function SigninSuccess() {
  return (
    <AnimatedBg>
      <div className={style.signinSuccessWrapper}>
        <div className={style.signinSuccessContainer}>
          <KafLifeTextLogo />
          <img src={require('../../assets/images/success_image.png')} />
          <h1>You have succesfully signed in!</h1>
          <p>
            Now you can easily access to your KAF Life account and start
            enjoying benefits
          </p>
          <button>Continue</button>
          <KafLifeLogo />
          <Footer />
        </div>
      </div>
    </AnimatedBg>
  );
}
