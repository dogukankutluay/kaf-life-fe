import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import classNames from 'classnames';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import languages from 'constants/lang';
import style from './passwordconfirm.module.scss';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import PasswordConfirmAnimation from 'assets/animations/PasswordConfirmAnimation.json';
export default function PasswordConfirm() {
  const navigate = useNavigate();
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].passwordConfirm
  );
  document.title = lang.pageTitle;
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
          <Lottie
            className='animate__animated animate__fadeIn delay-300'
            {...passwordConfirmOptions}
          />
          <h1 className='animate__animated animate__fadeInUp delay-300'>
            {lang.title}
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            {lang.description}
          </p>
          <button
            onClick={() => navigate('/signin')}
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
const passwordConfirmOptions = {
  animationData: PasswordConfirmAnimation,
  loop: true,
  autoPlay: true,
};
