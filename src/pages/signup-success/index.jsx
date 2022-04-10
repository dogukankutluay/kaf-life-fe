import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import classNames from 'classnames';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './success.module.scss';
import languages from 'constants/lang';
export default function SignupSuccess() {
  const navigate = useNavigate();
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].signupSuccess
  );
  document.title = lang.pageTitle;
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
            {lang.title}
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            {lang.description}
          </p>
          <button
            onClick={() => {
              navigate('/signin');
            }}
            className='animate__animated animate__fadeInUp delay-500'
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
