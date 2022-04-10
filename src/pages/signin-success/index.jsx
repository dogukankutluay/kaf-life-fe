import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './success.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import languages from 'constants/lang';
export default function SigninSuccess() {
  const navigate = useNavigate();
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].signinSuccess
  );
  document.title = lang.pageTitle;
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
            {lang.title}
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            {lang.description}
          </p>
          <button
            className='animate__animated animate__fadeInUp delay-500'
            onClick={() => navigate('/')}
          >
            {lang.continueBtn}
          </button>
          <KafLifeLogo className='animate__animated animate__fadeInRight delay-500' />
          <Footer />
        </div>
      </div>
    </AnimatedBg>
  );
}
