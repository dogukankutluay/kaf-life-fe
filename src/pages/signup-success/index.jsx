import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
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
        <div className={style.signupSuccessContainer}>
          <KafLifeTextLogo />
          <img src={require('../../assets/images/success_image.png')} />
          <h1>You have succesfully signed up!</h1>
          <p>
            Now you can easily access to your KAF Life account and start
            enjoying benefits
          </p>
          <button
            onClick={() => {
              navigate('/signin');
            }}
          >
            Continue
          </button>
          <KafLifeLogo />
          <Footer />
        </div>
      </div>
    </AnimatedBg>
  );
}
