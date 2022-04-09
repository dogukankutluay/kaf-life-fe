import { KafLifeLogo, MailIcon } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './verify.module.scss';
import Lottie from 'lottie-react';
import classNames from 'classnames';
export default function Verify() {
  return (
    <AnimatedBg>
      <div className={style.verifyWrapper}>
        <Header />
        <div className={style.verifyContainer}>
          {/* left side */}
          <section className={style.verifyContent}>
            <Navbar />
            {/* form */}
            <form action='' className={style.verifyForm}>
              <h1
                className={classNames(
                  style.verifyFormTitle,
                  'animate__animated animate__fadeInDown'
                )}
              >
                Verification Code
              </h1>
              <p
                className={classNames(
                  style.verifyFormSubtitle,
                  'animate__animated animate__fadeInDown'
                )}
              >
                Enter your verification code that send to your email.
              </p>

              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft'
                )}
              >
                <legend>Verification Code</legend>
                <div className={style.formInput}>
                  <input
                    type='text'
                    placeholder='Enter 6-digit code send to your verification device.'
                  />
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
          <section className={style.verifyContent}>
            <KafLifeLogo className={style.kafLogo} />
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
