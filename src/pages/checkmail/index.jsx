import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './checkmail.module.scss';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CheckYourMail() {
  document.title = 'Check your mail';

  let navigate = useNavigate();
  const redirect = useParams().redirect;
  return (
    <AnimatedBg>
      <div className={style.checkMailWrapper}>
        <div
          className={classNames(
            style.checkMailContainer,
            'animate__animated animate__zoomIn delay-100'
          )}
        >
          <KafLifeTextLogo className='animate__animated animate__fadeInLeft delay-200' />
          <Lottie {...animationOptions} className='delay-300' />
          <h1 className='animate__animated animate__fadeInUp delay-300'>
            Please check your email!
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            Please check your inbox for further instructions. Some emails can go
            to SPAM folder in order to prevent communication loss, please check
            this folder too.
          </p>
          <button
            className='animate__animated animate__fadeInUp delay-400'
            onClick={() => navigate(`/verify/${redirect}`)}
          >
            Continue
          </button>
          <KafLifeLogo className='animate__animated animate__fadeInRight delay-500' />
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
