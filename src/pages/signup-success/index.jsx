import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import classNames from 'classnames';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './success.module.scss';

export default function SignupSuccess() {
  const navigate = useNavigate();
  return (
    <AnimatedBg>
      <div className={style.signupSuccessWrapper}>
        <div
          className={classNames(
            style.signupSuccessContainer,
            'animate__animated animate__zoomIn delay-100'
          )}
        >
          <KafLifeTextLogo className='animate__animated animate__fadeInLeft delay-200' />
          <img
            className='animate__animated animate__fadeIn delay-300'
            src={require('../../assets/images/success_image.png')}
            alt='success!'
          />
          <h1 className='animate__animated animate__fadeInUp delay-300'>
            You have succesfully signed up!
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            Now you can easily access to your KAF Life account and start
            enjoying benefits
          </p>
          <button
            onClick={() => {
              navigate('/signin');
            }}
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
