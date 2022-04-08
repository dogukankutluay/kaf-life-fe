import { KafLifeLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './changepassword.module.scss';

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
              <h1 className={style.changePasswordFormTitle}>
                Forgot Password?
              </h1>
              <p className={style.changePasswordFormSubtitle}>
                Please enter your email while you register.
              </p>

              <div className={style.formItem}>
                <legend>New Password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Please enter your new password'
                />
              </div>
              <div className={style.formItem}>
                <legend>Re-enter Password</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder='Enter your new password again.'
                />
              </div>

              {/* form buttons */}
              <button className={style.btnConfirm}>Confirm</button>
              <button className={style.btnBack}>Back</button>
            </form>
            <Footer />
          </section>
          {/* right side */}
          <section className={style.changePasswordContent}>
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
