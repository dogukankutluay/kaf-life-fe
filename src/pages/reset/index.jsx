import { KafLifeLogo, MailIcon } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './reset.module.scss';
import classNames from 'classnames';
import Lottie from 'lottie-react';

export default function ResetPassword() {
  return (
    <AnimatedBg>
      <div className={style.resetWrapper}>
        <Header />
        <div className={style.resetContainer}>
          {/* left side */}
          <section className={style.resetContent}>
            <Navbar />
            {/* form */}
            <form action='' className={style.resetForm}>
              <h1
                className={classNames(
                  style.resetFormTitle,
                  'animate__animated animate__fadeInDown'
                )}
              >
                Forgot Password?
              </h1>
              <p
                className={classNames(
                  style.resetFormSubtitle,
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
                <legend>Email</legend>
                <div className={style.formInput}>
                  <input type='text' placeholder='Please enter your email' />
                  <MailIcon />
                </div>
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
              style.resetContent,
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
