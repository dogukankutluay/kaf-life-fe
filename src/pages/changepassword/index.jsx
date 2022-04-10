import { KafLifeLogo } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './changepassword.module.scss';
import Lottie from 'lottie-react';
import classNames from 'classnames';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from 'requests';
import { useSelector } from 'react-redux';
import languages from 'constants/lang';
const FORM_INITIAL = {
  password: '',
  passwordConfirmation: '',
};
const RESPONSE_INITIAL = {
  success: false,
  message: '',
};

export default function ChangePassword() {
  const [form, setForm] = useState(FORM_INITIAL);
  const code = useParams().code;
  const [response, setResponse] = useState(RESPONSE_INITIAL);
  const navigate = useNavigate();
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].changePassword
  );
  document.title = lang.pageTitle;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(RESPONSE_INITIAL);
    try {
      const { data } = await auth.changePassword({ ...form, code });
      if (data.success) {
        navigate('/password-confirm-success');
      } else {
        setResponse({ success: false, message: data.message });
      }
    } catch (error) {
      setResponse({
        success: false,
        message: error.response.data.message || 'An error occured',
      });
    }
  };
  return (
    <AnimatedBg>
      <div className={style.changePasswordWrapper}>
        <Header />
        <div className={style.changePasswordContainer}>
          {/* left side */}
          <section
            className={classNames(style.changePasswordContent, 'delay-300')}
          >
            <Navbar />
            {/* form */}
            <form action='' className={style.changePasswordForm}>
              <h1
                className={classNames(
                  style.changePasswordFormTitle,
                  'animate__animated animate__fadeInDown delay-300'
                )}
              >
                {lang.title}
              </h1>
              <p
                className={classNames(
                  style.changePasswordFormSubtitle,
                  'animate__animated animate__fadeInDown delay-300'
                )}
              >
                {lang.description}
              </p>

              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <legend>{lang.newPassword}</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder={lang.newPasswordPlaceholder}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <legend>{lang.passwordVerify}</legend>
                <input
                  className={style.formInput}
                  type='password'
                  placeholder={lang.passwordVerifyPlaceholder}
                  onChange={(e) =>
                    setForm({ ...form, passwordConfirmation: e.target.value })
                  }
                />
              </div>
              <span className='response-error'>{response.message}</span>
              {/* form buttons */}
              <button
                className={classNames(
                  style.btnConfirm,
                  'animate__animated animate__fadeInUp delay-500'
                )}
                onClick={handleSubmit}
              >
                {lang.confirmBtn}
              </button>
              <button
                className={classNames(
                  style.btnBack,
                  'animate__animated animate__fadeInUp delay-500'
                )}
                onClick={() => navigate('/signin')}
              >
                {lang.backBtn}
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
