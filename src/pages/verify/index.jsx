import { KafLifeLogo, MailIcon } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './verify.module.scss';

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
              <h1 className={style.verifyFormTitle}>Verification Code</h1>
              <p className={style.verifyFormSubtitle}>
                Enter your verification code that send to your email.
              </p>

              <div className={style.formItem}>
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
              <button className={style.btnConfirm}>Confirm</button>
              <button className={style.btnBack}>Back</button>
            </form>
            <Footer />
          </section>
          {/* right side */}
          <section className={style.verifyContent}>
            <KafLifeLogo className={style.kafLogo} />
            <img
              src={require('../../assets/images/forgot_password_card_img.png')}
              alt='login to kay life'
            />
          </section>
        </div>
      </div>
    </AnimatedBg>
  );
}
