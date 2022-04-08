import { KafLifeTextLogo, KafLifeLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';
import style from './signup.module.scss';

export default function Signup() {
  return (
    <AnimatedBg>
      <div className={style.signupWrapper}>
        <Header />
        <div className={style.signupContainer}>
          {/* left side */}
          <section className={style.signupContent}>
            {/* navbar */}
            <nav className={style.signupNavbar}>
              <KafLifeTextLogo />
              <select name='' id=''>
                <option value=''>English</option>
                <option value=''>Turkish</option>
              </select>
            </nav>
            {/* form */}
            <form action='' className={style.signupForm}>
              <h1 className={style.signupFormTitle}>Sign Up</h1>
              <p className={style.signupFormSubtitle}>
                Do you have an account? <a href='/signin'>Sign in</a>{' '}
              </p>
              <aside>
                <div className={style.formItem}>
                  <legend>Name</legend>
                  <input
                    className={style.formInput}
                    type='text'
                    placeholder='Please enter your name.'
                  />
                </div>
                <div className={style.formItem}>
                  <legend>Surname</legend>
                  <input
                    className={style.formInput}
                    type='text'
                    placeholder='Please enter your surname'
                  />
                </div>
              </aside>
              <aside>
                <div className={style.formItem}>
                  <legend>E-mail</legend>
                  <input
                    className={style.formInput}
                    type='text'
                    placeholder='Please enter your e-mail.'
                  />
                </div>
                <div className={style.formItem}>
                  <legend>Phone</legend>
                  <input
                    className={style.formInput}
                    type='text'
                    placeholder='Please enter your phone.'
                  />
                </div>
              </aside>
              <div className={style.formItem}>
                <legend>Password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Enter at least 8 characters with special characters.'
                />
              </div>{' '}
              <div className={style.formItem}>
                <legend>Confirm your password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Please confirm your password.'
                />
              </div>
              <div className={style.formCheckbox}>
                <input type='checkbox' />
                <span>
                  Your password has to be at least 8 characters and have one
                  special character.
                </span>
              </div>
              {/* form buttons */}
              <aside>
                <button className={style.btnCancel}>Cancel</button>
                <button className={style.btnConfirm}>Confirm</button>
              </aside>
            </form>
            {/*form footer */}
            <Footer />
          </section>
          {/* right side */}
          <section className={style.signupContent}>
            <div className={style.signupContentCard}>
              <h2>One Step to KAF Life</h2>
              <p>
                If you want to enjoy KAF Life’s benefits, you have you have to
                apply for KAF Pay Card first. You can <a href=''>click here</a>{' '}
                for apply.
              </p>
            </div>
            <KafLifeLogo className={style.kafLogo} />
          </section>
        </div>
      </div>
    </AnimatedBg>
  );
}
