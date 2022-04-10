import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import React from 'react';
import style from './success.module.scss';
import { useNavigate } from 'react-router-dom';
export default function SigninSuccess() {
  const navigate = useNavigate();
  return (
    <AnimatedBg>
      <div className={style.signinSuccessWrapper}>
        <div className={style.signinSuccessContainer}>
          <KafLifeTextLogo />
          <img
            src={require('../../assets/images/success_image.png')}
            alt='success'
          />
          <h1>You have succesfully signed in!</h1>
          <p>
            Now you can easily access to your KAF Life account and start
            enjoying benefits
          </p>
          <button onClick={() => navigate('/')}>Continue</button>
          <KafLifeLogo />
          <Footer />
        </div>
      </div>
    </AnimatedBg>
  );
}
