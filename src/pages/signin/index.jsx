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
import { useDispatch, useSelector } from 'react-redux';
import { redirectAction } from 'redux/actions/authAction';
import { Checkbox } from 'components/checkbox';
import Unlock from 'assets/animations/Unlock.json';
import languages from 'constants/lang';
import ReCAPTCHA from 'react-google-recaptcha';

const FORM_INITIAL = {
  email: '',
  password: '',
};
const RESPONSE_INITIAL = {
  success: false,
  message: '',
};
export default function Signin() {
  let lang = useSelector(
    (state) => languages[state.preferencesReducer.language].signin
  );
  document.title = lang.title;
  const [loginForm, setLoginForm] = useState(FORM_INITIAL);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [response, setResponse] = useState(RESPONSE_INITIAL);
  const [captcha, setCaptcha] = useState();
  let dispatch = useDispatch();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!captcha) {
      setResponse({
        success: false,
        message: 'Please verify you are not a robot',
      });
      setLoading(false);
      return 0;
    }
    setResponse(RESPONSE_INITIAL);
    try {
      const result = await auth.login(loginForm);
      if (result.data.success) {
        dispatch(redirectAction(result.data.redirect));
        setResponse({ success: true, message: 'Login succeed.' });
        navigate('/signin-success');
      } else {
        setResponse({
          success: false,
          message: result.data.message || 'An error occured',
        });
      }
    } catch (error) {
      setResponse({
        success: false,
        message: error.response.data.message || 'An error  occured',
      });
    }
    setLoading(false);
  };
  const handleCaptcha = (value) => {
    setCaptcha(value);
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
                {lang.title}
              </h1>
              <p
                className={classNames(
                  style.signinFormSubtitle,
                  'animate__animated animate__fadeInDown delay-200 '
                )}
              >
                {lang.subtitle} <Link to='/signup'>{lang.direct}</Link>{' '}
              </p>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-300'
                )}
              >
                <legend>{lang.email}</legend>
                <div className={style.formInput}>
                  <input
                    type='text'
                    placeholder={lang.emailPlaceholder}
                    name='email'
                    value={loginForm.email}
                    onChange={handleFormChange}
                    autoComplete='username'
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
                <legend>{lang.password}</legend>
                <div className={style.formInput}>
                  <input
                    type='password'
                    placeholder={lang.passwordPlaceholder}
                    value={loginForm.password}
                    name='password'
                    onChange={handleFormChange}
                    autoComplete='current-password'
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
                <Checkbox />
                <span>{lang.checkbox}</span>
              </div>
              <ReCAPTCHA
                sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                onChange={handleCaptcha}
              />
              {/* form buttons */}
              <span
                className={
                  response.success ? 'response-success' : 'response-error'
                }
              >
                {response.message}
              </span>
              <button
                className={classNames(
                  style.btnLogin,
                  'animate__animated animate__fadeInUp delay-400'
                )}
                onClick={handleFormSubmit}
              >
                {loading ? (
                  <Lottie
                    {...unlockAnimation}
                    style={lottieStyle}
                    className='animate__animated animate__zoomIn'
                  />
                ) : (
                  lang.loginBtn
                )}
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
                {lang.reset}
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
                {...welcomeAnimation}
                className='animate__animated animate__slideInRight'
              />
            </div>
          </section>
        </div>
      </div>
    </AnimatedBg>
  );
}

const welcomeAnimation = {
  animationData: Welcome,
  loop: true,
  autoPlay: true,
};
const unlockAnimation = {
  animationData: Unlock,
  loop: false,
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

const lottieStyle = { width: '50px', marginLeft: 'auto', marginRight: 'auto' };
