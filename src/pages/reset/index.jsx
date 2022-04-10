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
import { useDispatch } from 'react-redux';
import { registerAction } from 'redux/actions/authAction';
export default function ResetPassword() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [form, setForm] = useState({ email: '' });
  const [response, setResponse] = useState({ success: false, message: '' });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setResponse({ success: false, message: '' });
    try {
      const { data } = await auth.forgotPassword({ email: form.email });
      if (data.success) {
        dispatch(registerAction({ ...data.user }));
        navigate('/check-mail/change-password');
      } else {
        setResponse({ success: false, message: data.message });
      }
    } catch (error) {
      setResponse({
        success: false,
        message: error.response.data.message || 'user not found',
      });
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
                Forgot Password?
              </h1>
              <p
                className={classNames(
                  style.resetFormSubtitle,
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                Please enter your email while you register.
              </p>

              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-300'
                )}
              >
                <legend>Email</legend>
                <div className={style.formInput}>
                  <input
                    type='text'
                    placeholder='Please enter your email'
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
                Confirm
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
