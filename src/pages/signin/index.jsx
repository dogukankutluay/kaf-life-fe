import React from 'react';
import AnimatedBg from 'components/animatedbg';
import style from './signin.module.scss';

import { KafLifeLogo, MailIcon, PasswordIcon } from 'assets/icons';
import Header from 'components/header';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <AnimatedBg>
      <div className={style.signinWrapper}>
        <Header />
        <div className={style.signinContainer}>
          {/* left side */}
          <section className={style.signinContent}>
            <Navbar />
            {/* form */}
            <form action='' className={style.signinForm}>
              <h1 className={style.signinFormTitle}>Login</h1>
              <p className={style.signinFormSubtitle}>
                Don’t have an account yet? <Link to='/signup'>Sign up</Link>{' '}
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
