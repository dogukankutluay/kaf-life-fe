import { KafLifeLogo, MailIcon } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './reset.module.scss';

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
              <h1 className={style.resetFormTitle}>Forgot Password?</h1>
              <p className={style.resetFormSubtitle}>
                Please enter your email while you register.
              </p>

              <div className={style.formItem}>
                <legend>Email</legend>
                <div className={style.formInput}>
                  <input type='text' placeholder='Please enter your email' />
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
          <section className={style.resetContent}>
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
