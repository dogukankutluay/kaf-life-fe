import { KafLifeLogo, MailIcon } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './reset.module.scss';
import classNames from 'classnames';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from 'requests';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from 'redux/actions/authAction';
import fetch from 'helpers/fetch';
import languages from 'constants/lang';
const RESPONSE_INITIAL = {
  success: false,
  message: '',
  data: {},
  loading: false,
};
export default function ResetPassword() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].reset
  );
  document.title = lang.pageTitle;
  const [form, setForm] = useState({ email: '' });
  const [response, setResponse] = useState(RESPONSE_INITIAL);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setResponse({ ...RESPONSE_INITIAL, loading: true });
    fetch(() => auth.forgotPassword({ email: form.email }))
      .then(setResponse)
      .catch(setResponse);
    if (response.success) {
      dispatch(registerAction({ ...response.data.user }));
      navigate('/check-mail/change-password');
    }
  };

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
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                {lang.title}
              </h1>
              <p
                className={classNames(
                  style.resetFormSubtitle,
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                {lang.description}
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
                    value={form.email}
                    onChange={(e) => setForm({ email: e.target.value })}
                  />
                  <MailIcon />
                </div>
              </div>
              <span className='response-error'>{response.message}</span>
              {/* form buttons */}
              <button
                className={classNames(
                  style.btnConfirm,
                  'animate__animated animate__fadeInUp delay-400'
                )}
                onClick={handleFormSubmit}
              >
                {response.loading ? 'Loading...' : lang.confirmBtn}
              </button>
              <button
                className={classNames(
                  style.btnBack,
                  'animate__animated animate__fadeInUp delay-500'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signin');
                }}
              >
                {lang.backBtn}
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
