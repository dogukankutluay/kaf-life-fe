import React, { useState } from 'react';
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
import lottieBg from 'assets/images/lottiebg.png';
import { useNavigate } from 'react-router-dom';
import { auth } from 'requests';

const FORM_INITIAL = {
  email: '',
  password: '',
};
export default function Signin() {
  const [loginForm, setLoginForm] = useState(FORM_INITIAL);
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await auth.login(loginForm);
      console.log(result.data);
    } catch (e) {
      console.log(e.response);
    }
  };

  const handleFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
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
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                Login
              </h1>
              <p
                className={classNames(
                  style.signinFormSubtitle,
                  'animate__animated animate__fadeInDown delay-200 '
                )}
              >
                Don’t have an account yet? <Link to='/signup'>Sign up</Link>{' '}
              </p>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-300'
                )}
              >
                <legend>Email / Mobile</legend>
                <div className={style.formInput}>
                  <input
                    type='text'
                    placeholder='Please enter your email or mobile phone'
                    name='email'
                    value={loginForm.email}
                    onChange={handleFormChange}
                  />
                  <MailIcon />
                </div>
              </div>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-300'
                )}
              >
                <legend>Password</legend>
                <div className={style.formInput}>
                  <input
                    type='password'
                    placeholder='Please enter your password'
                    value={loginForm.password}
                    name='password'
                    onChange={handleFormChange}
                  />
                  <PasswordIcon />
                </div>
              </div>
              <div
                className={classNames(
                  style.formCheckbox,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <input type='checkbox' />
                <span>Remember me</span>
              </div>
              {/* form buttons */}
              <button
                className={classNames(
                  style.btnLogin,
                  'animate__animated animate__fadeInUp delay-400'
                )}
                onClick={handleFormSubmit}
              >
                Login
              </button>
              <button
                className={classNames(
                  style.btnReset,
                  'animate__animated animate__fadeInUp delay-500'
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
              <Lottie
                {...animationOptions}
                className='animate__animated animate__slideInRight'
              />
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
  backgroundImage: `url(${lottieBg})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  width: '100%',
  aspectRatio: 1,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
