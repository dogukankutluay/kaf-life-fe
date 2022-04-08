import React from 'react';
import AnimatedBg from 'components/animatedbg';
import style from './signin.module.scss';

import {
  KafLifeLogo,
  KafLifeTextLogo,
  MailIcon,
  PasswordIcon,
} from 'assets/icons';
import Header from 'components/header';
import Footer from 'components/footer';

export default function Signin() {
  return (
    <AnimatedBg>
      <div className={style.signinWrapper}>
        <Header />
        <div className={style.signinContainer}>
          {/* left side */}
          <section className={style.signinContent}>
            {/* navbar */}
            <nav className={style.signinNavbar}>
              <KafLifeTextLogo />
              <select name='' id=''>
                <option value=''>English</option>
                <option value=''>Turkish</option>
              </select>
            </nav>
            {/* form */}
            <form action='' className={style.signinForm}>
              <h1 className={style.signinFormTitle}>Login</h1>
              <p className={style.signinFormSubtitle}>
                Don’t have an account yet? <a href='/signup'>Sign up</a>{' '}
              </p>
              <div className={style.formItem}>
                <legend>Email / Mobile</legend>
                <div className={style.formInput}>
                  <input
                    type='text'
                    placeholder='Please enter your email or mobile phone'
                  />
                  <MailIcon />
                </div>
              </div>
              <div className={style.formItem}>
                <legend>Password</legend>
                <div className={style.formInput}>
                  <input
                    type='password'
                    placeholder='Please enter your password'
                  />
                  <PasswordIcon />
                </div>
              </div>
              <div className={style.formCheckbox}>
                <input type='checkbox' />
                <span>Remember me</span>
              </div>
              {/* form buttons */}
              <button className={style.btnLogin}>Login</button>
              <button className={style.btnReset}>Reset password</button>
            </form>
            <Footer />
          </section>
          {/* right side */}
          <section className={style.signinContent}>
            <KafLifeLogo className={style.kafLogo} />
            <img
              src={require('../../assets/images/sign_in_card_img.png')}
              alt='login to kay life'
            />
          </section>
        </div>
      </div>
    </AnimatedBg>
  );
}
