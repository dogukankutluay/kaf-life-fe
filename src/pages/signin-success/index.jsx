import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './success.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
export default function SigninSuccess() {
  const navigate = useNavigate();
  return (
    <AnimatedBg>
      <div className={style.signinSuccessWrapper}>
        <div
          className={classNames(
            style.signinSuccessContainer,
            'animate__animated animate__zoomIn delay-100'
          )}
        >
          <KafLifeTextLogo className='animate__animated animate__fadeInLeft delay-200' />
          <img
            src={require('../../assets/images/success_image.png')}
            alt='success'
            className='animate__animated animate__fadeIn delay-300'
          />
          <h1 className='animate__animated animate__fadeInUp delay-300'>
            You have succesfully signed in!
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            Now you can easily access to your KAF Life account and start
            enjoying benefits
          </p>
          <button
            className='animate__animated animate__fadeInUp delay-500'
            onClick={() => navigate('/')}
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
