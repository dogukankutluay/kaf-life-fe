import { KafLifeLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './changepassword.module.scss';
import Lottie from 'lottie-react';
import classNames from 'classnames';
export default function ChangePassword() {
  return (
    <AnimatedBg>
      <div className={style.changePasswordWrapper}>
        <Header />
        <div className={style.changePasswordContainer}>
          {/* left side */}
          <section className={style.changePasswordContent}>
            <Navbar />
            {/* form */}
            <form action='' className={style.changePasswordForm}>
              <h1
                className={classNames(
                  style.changePasswordFormTitle,
                  'animate__animated animate__fadeInDown'
                )}
              >
                Forgot Password?
              </h1>
              <p
                className={classNames(
                  style.changePasswordFormSubtitle,
                  'animate__animated animate__fadeInDown'
                )}
              >
                Please enter your email while you register.
              </p>

              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft'
                )}
              >
                <legend>New Password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Please enter your new password'
                />
              </div>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft'
                )}
              >
                <legend>Re-enter Password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Enter your new password again.'
                />
              </div>

              {/* form buttons */}
              <button
                className={classNames(
                  style.btnConfirm,
                  'animate__animated animate__fadeInUp'
                )}
              >
                Confirm
              </button>
              <button
                className={classNames(
                  style.btnBack,
                  'animate__animated animate__fadeInUp'
                )}
              >
                Back
              </button>
            </form>
            <Footer />
          </section>
          {/* right side */}
          <section
            className={classNames(
              style.changePasswordContent,
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
  animationData: require('assets/animations/ForgotPassword.json'),
  loop: true,
  autoPlay: true,
};
const animationContainer = {
  backgroundImage: `url(${require('assets/images/lottiebg.png')})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  width: '100%',
  aspectRatio: 1,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
