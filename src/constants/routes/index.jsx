import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Home from 'pages/home';
import ResetPassword from 'pages/reset';
import SigninSuccess from 'pages/signin-success';
import SignupSuccess from 'pages/signup-success';
import CheckYourMail from 'pages/checkmail';
import Verify from 'pages/verify';
import ChangePassword from 'pages/changepassword';
import PasswordConfirm from 'pages/passwordconfirm';
const AllRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    protected: false,
  },
  {
    path: '/signin',
    component: Signin,
    exact: true,
    protected: false,
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
    protected: false,
  },
  {
    path: '/reset',
    component: ResetPassword,
    exact: true,
    protected: false,
  },
  {
    path: '/signin-success',
    component: SigninSuccess,
    exact: true,
    protected: false,
  },
  {
    path: '/signup-success',
    component: SignupSuccess,
    exact: true,
    protected: false,
  },
  {
    path: '/check-mail',
    component: CheckYourMail,
    exact: true,
    protected: false,
  },
  {
    path: '/verify',
    component: Verify,
    exact: true,
    protected: false,
  },
  {
    path: '/change-password',
    component: ChangePassword,
    exact: true,
    protected: false,
  },
  {
    path: '/change-password-success',
    component: PasswordConfirm,
    exact: true,
    protected: false,
  },
];
export default AllRoutes;
