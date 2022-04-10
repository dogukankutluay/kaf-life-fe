import { KafLifeLogo, MailIcon } from 'assets/icons';
import AnimatedBg from 'components/animatedbg';
import Footer from 'components/footer';
import Header from 'components/header';
import Navbar from 'components/navbar';
import style from './verify.module.scss';
import Lottie from 'lottie-react';
import classNames from 'classnames';
import { useState } from 'react';
import { auth } from 'requests';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const FORM_INITIAL = {
  code: '',
};
const RESPONSE_INITIAL = {
  success: false,
  message: '',
};
export default function Verify() {
  const [form, setForm] = useState(FORM_INITIAL);
  const { phone } = useSelector((state) => state.authReducer.user);
  const [response, setResponse] = useState(RESPONSE_INITIAL);
  const navigate = useNavigate();
  const param = useParams().type;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (param === 'account') {
        const result = await auth.confirmRegister({ code: form.code, phone });
        if (result.data.success) {
          navigate('/signup-success');
        }
      }
      if (param === 'change-password') {
        const result = await auth.confirmForgotPassword({
          code: form.code,
          phone,
        });
        if (result.data.success) {
          navigate(`/change-password/${form.code}`);
        }
      }
    } catch (error) {
      setResponse({ success: false, message: 'Code is not valid' });
    }
  };
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
                  'animate__animated animate__fadeInDown delay-200'
                )}
              >
                Verification Code
              </h1>
              <p
                className={classNames(
                  style.verifyFormSubtitle,
                  'animate__animated animate__fadeInDown delay-300'
                )}
              >
                Enter your verification code that send to your email.
              </p>

              <div
                className={classNames(
                  style.formItem,
                  'animate__animated animate__fadeInLeft delay-400'
                )}
              >
                <legend>Verification Code</legend>
                <div className={style.formInput}>
                  <input
                    type='text'
                    placeholder='Enter 6-digit code send to your verification device.'
                    value={form.code}
                    onChange={(e) => setForm({ code: e.target.value })}
                  />
                  <MailIcon />
                </div>
              </div>
              <span
                className={
                  response.success ? 'response-success' : 'response-error'
                }
              >
                {response.message}
              </span>
              {/* form buttons */}
              <button
                className={classNames(
                  style.btnConfirm,
                  'animate__animated animate__fadeInUp delay-500'
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
