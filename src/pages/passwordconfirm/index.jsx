import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import classNames from 'classnames';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './passwordconfirm.module.scss';
export default function PasswordConfirm() {
  const navigate = useNavigate();
  return (
    <AnimatedBg>
      <div className={style.passwordConfirmWrapper}>
        <div
          className={classNames(
            style.passwordConfirmContainer,
            'animate__animated animate__zoomIn delay-100'
          )}
        >
          <KafLifeTextLogo className='animate__animated animate__fadeInLeft delay-200' />
          <img
            src={require('../../assets/images/success_image.png')}
            className='animate__animated animate__fadeIn delay-300'
            alt='success!'
          />
          <h1 className='animate__animated animate__fadeInUp delay-300'>
            You have succesfully changed your password!
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            Now you can easily access to your KAF Life account and start
            enjoying benefits
          </p>
          <button
            onClick={() => navigate('/signin')}
            className='animate__animated animate__fadeInUp delay-500'
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
