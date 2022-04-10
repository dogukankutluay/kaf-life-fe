import { KafLifeLogo, KafLifeTextLogo } from 'assets/icons';
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
        <div className={style.passwordConfirmContainer}>
          <KafLifeTextLogo />
          <img src={require('../../assets/images/success_image.png')} />
          <h1>You have succesfully changed your password!</h1>
          <p>
            Now you can easily access to your KAF Life account and start
            enjoying benefits
          </p>
          <button onClick={() => navigate('/signin')}>Continue</button>
          <KafLifeLogo />
          <Footer />
        </div>
      </div>
    </AnimatedBg>
  );
}
