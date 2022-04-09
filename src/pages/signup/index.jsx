import { KafLifeLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import { Link, useNavigate } from 'react-router-dom';
import style from './signup.module.scss';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import SigninLottie from 'assets/animations/SigninLottie.json';

export default function Signup() {
  let navigate = useNavigate();
  return (
    <AnimatedBg>
      <div className={style.signupWrapper}>
        <Header />
        <div className={style.signupContainer}>
          {/* left side */}
          <section className={style.signupContent}>
            <Navbar />
            {/* form */}
            <form action='' className={style.signupForm}>
              <h1
                className={classNames(
                  style.signupFormTitle,
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                Sign Up
              </h1>
              <p
                className={classNames(
                  style.signupFormSubtitle,
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                Do you have an account? <Link to='/signin'>Sign in</Link>{' '}
              </p>
              <aside className='animate__animated animate__fadeInLeft delay-300'>
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
              <aside className='animate__animated animate__fadeInLeft delay-300'>
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
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <legend>Password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Enter at least 8 characters with special characters.'
                />
              </div>{' '}
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <legend>Confirm your password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Please confirm your password.'
                />
              </div>
              <div
                className={classNames(
                  style.formCheckbox,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <input type='checkbox' />
                <span>
                  Your password has to be at least 8 characters and have one
                  special character.
                </span>
              </div>
              {/* form buttons */}
              <aside className='animate__animated animate__fadeInUp delay-500'>
                <button
                  className={style.btnCancel}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/signin');
                  }}
                >
                  Cancel
                </button>
                <button className={style.btnConfirm}>Confirm</button>
              </aside>
            </form>
            <Footer />
          </section>
          {/* right side */}
          <section
            className={classNames(
              style.signupContent,
              'animate__animated animate__slideInRight'
            )}
          >
            <Lottie
              {...animationOptions}
              className={classNames(
                style.signupLottie,
                'animate_animated animate__fadeIn'
              )}
            />
            <div
              className={classNames(
                style.signupContentCard,
                'animate__animated animate__zoomIn'
              )}
            >
              <h2 className='animate__animated animate__fadeInDown'>
                One Step to KAF Life
              </h2>
              <img
                src={require('assets/images/signin_image.jpeg')}
                alt='sign in KAF pay card'
                className='animate__animated animate__slideInRight'
              />
              <p className='animate__animated animate__fadeInUp'>
                If you want to enjoy KAF Life’s benefits, you have you have to
                apply for KAF Pay Card first. You can <a href=''>click here</a>{' '}
                for apply.
              </p>
            </div>
            <KafLifeLogo
              className={classNames(
                style.kafLogo,
                'animate__animated animate__fadeInTopRight'
              )}
            />
          </section>
        </div>
      </div>
    </AnimatedBg>
  );
}

const animationOptions = {
  animationData: SigninLottie,
  loop: false,
  autoPlay: true,
};
