import React from 'react';
import AnimatedBg from 'components/animatedbg';
import style from './signin.module.scss';
import { KafLifeLogo, MailIcon, PasswordIcon } from 'assets/icons';
import Header from 'components/header';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import classNames from 'classnames';
import Welcome from 'assets/animations/Welcome.json';
import loginBg from 'assets/images/login_bg.png';
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  const navigate = useNavigate();
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
              <h1
                className={classNames(
                  style.signinFormTitle,
                  'animate__animated animate__fadeInDown'
                )}
              >
                Login
              </h1>
              <p
                className={classNames(
                  style.signinFormSubtitle,
                  'animate__animated animate__fadeInDown '
                )}
              >
                Don’t have an account yet? <Link to='/signup'>Sign up</Link>{' '}
              </p>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft'
                )}
              >
                <legend>Email / Mobile</legend>
                <div className={style.formInput}>
                  <input
                    type='text'
                    placeholder='Please enter your email or mobile phone'
                  />
                  <MailIcon />
                </div>
              </div>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft'
                )}
              >
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
              <button
                className={classNames(
                  style.btnLogin,
                  'animate__animated animate__fadeInUp'
                )}
              >
                Login
              </button>
              <button
                className={classNames(
                  style.btnReset,
                  'animate__animated animate__fadeInUp'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/reset');
                }}
              >
                Reset password
              </button>
            </form>
            <Footer />
          </section>
          {/* right side */}
          <section
            className={classNames(
              style.signinContent,
              'animate__animated animate__slideInRight'
            )}
          >
            <KafLifeLogo
              className={classNames(
                style.kafLogo,
                'animate__animated animate__fadeInTopRight'
              )}
            />
            <div
              style={animationContainer}
              className='animate__animated animate__zoomIn'
            >
              <Lottie {...animationOptions} />
            </div>
          </section>
        </div>
      </div>
    </AnimatedBg>
  );
}

const animationOptions = {
  animationData: Welcome,
  loop: true,
  autoPlay: true,
};

const animationContainer = {
  backgroundImage: `url(${loginBg})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  width: '100%',
  aspectRatio: 1,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
