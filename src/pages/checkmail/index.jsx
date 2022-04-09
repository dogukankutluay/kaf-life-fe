import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './checkmail.module.scss';
import classNames from 'classnames';
import Lottie from 'lottie-react';
export default function CheckYourMail() {
  return (
    <AnimatedBg>
      <div className={style.checkMailWrapper}>
        <div
          className={classNames(
            style.checkMailContainer,
            'animate__animated animate__zoomIn'
          )}
        >
          <KafLifeTextLogo className='animate__animated animate__fadeInLeft' />
          <Lottie {...animationOptions} />
          <h1 className='animate__animated animate__fadeInUp'>
            Please check your email!
          </h1>
          <p className='animate__animated animate__fadeInUp'>
            Please check your inbox for further instructions. Some emails can go
            to SPAM folder in order to prevent communication loss, please check
            this folder too.
          </p>
          <button className='animate__animated animate__fadeInUp'>
            Continue
          </button>
          <KafLifeLogo className='animate__animated animate__fadeInRight' />
          <Footer />
        </div>
      </div>
    </AnimatedBg>
  );
}
const animationOptions = {
  animationData: require('assets/animations/EmailOpen.json'),
  loop: false,
  autoPlay: true,
};
