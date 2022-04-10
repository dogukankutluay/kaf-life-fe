import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './checkmail.module.scss';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import languages from 'constants/lang';
export default function CheckYourMail() {
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].checkMail
  );
  document.title = lang.pageTitle;

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
            {lang.title}
          </h1>
          <p className='animate__animated animate__fadeInUp delay-300'>
            {lang.description}
          </p>
          <button
            className='animate__animated animate__fadeInUp delay-400'
            onClick={() => navigate(`/verify/${redirect}`)}
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
const animationOptions = {
  animationData: require('assets/animations/EmailOpen.json'),
  loop: false,
  autoPlay: true,
};
