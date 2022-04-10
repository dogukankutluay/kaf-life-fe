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
import { useState } from 'react';
import { auth } from 'requests';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from 'redux/actions/authAction';
import { Checkbox } from 'components/checkbox';
import languages from 'constants/lang';

const FORM_INITIAL = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};
const RESPONSE_INITIAL = {
  success: false,
  message: '',
};
export default function Signup() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const lang = useSelector(
    (state) => languages[state.preferencesReducer.language].signup
  );
  document.title = lang.title;
  const [form, setForm] = useState(FORM_INITIAL);
  const [response, setResponse] = useState(RESPONSE_INITIAL);
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setResponse(RESPONSE_INITIAL);

    if (form.confirmPassword !== form.password) {
      setResponse({ success: false, message: 'Passwords are not same' });
      return 0;
    }

    try {
      const result = await auth.register(form);
      if (result.data.success) {
        setResponse({ success: true, message: 'Successfully registered' });
        dispatch(registerAction({ phone: form.phone }));
        navigate('/verify/account');
      } else {
        setResponse({ success: false, message: result.data.message });
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
                {lang.title}
              </h1>
              <p
                className={classNames(
                  style.signupFormSubtitle,
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                {lang.subtitle} <Link to='/signin'>{lang.direct}</Link>{' '}
              </p>
              <aside className='animate__animated animate__fadeInLeft delay-300'>
                <div className={style.formItem}>
                  <legend>{lang.name}</legend>
                  <input
                    className={style.formInput}
                    type='text'
                    placeholder={lang.namePlaceholder}
                    name='name'
                    value={form.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className={style.formItem}>
                  <legend>{lang.surname}</legend>
                  <input
                    name='surname'
                    className={style.formInput}
                    type='text'
                    placeholder={lang.surnamePlaceholder}
                    value={form.surname}
                    onChange={handleFormChange}
                  />
                </div>
              </aside>
              <aside className='animate__animated animate__fadeInLeft delay-300'>
                <div className={style.formItem}>
                  <legend>{lang.email}</legend>
                  <input
                    name='email'
                    className={style.formInput}
                    type='text'
                    placeholder={lang.emailPlaceholder}
                    value={form.email}
                    onChange={handleFormChange}
                  />
                </div>
                <div className={style.formItem}>
                  <legend>{lang.phone}</legend>
                  <input
                    name='phone'
                    className={style.formInput}
                    type='text'
                    placeholder={lang.phonePlaceholder}
                    value={form.phone}
                    onChange={handleFormChange}
                  />
                </div>
              </aside>
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <legend>{lang.password}</legend>
                <input
                  name='password'
                  className={style.formInput}
                  type='password'
                  placeholder={lang.passwordPlaceholder}
                  value={form.password}
                  onChange={handleFormChange}
                />
              </div>{' '}
              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <legend>{lang.confirmPassword}</legend>
                <input
                  name='confirmPassword'
                  className={style.formInput}
                  type='password'
                  placeholder={lang.confirmPasswordPlaceholder}
                  value={form.confirmPassword}
                  onChange={handleFormChange}
                />
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
              {/* form buttons */}
              <span
                className={
                  response.success ? 'response-success' : 'response-error'
                }
              >
                {response.message}
              </span>
              <aside className='animate__animated animate__fadeInUp delay-500'>
                <button
                  className={style.btnCancel}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/signin');
                  }}
                >
                  {lang.cancel}
                </button>
                <button className={style.btnConfirm} onClick={handleFormSubmit}>
                  {lang.confirm}
                </button>
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
                {lang.cardTitle}
              </h2>
              <img
                src={require('assets/images/signin_image.jpeg')}
                alt='sign in KAF pay card'
                className='animate__animated animate__slideInRight'
              />
              <p className='animate__animated animate__fadeInUp'>
                {lang.cardDescription}
                <Link to='/signin'>{lang.cardDirect}</Link>{' '}
                {lang.descriptionEnd}
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
