import Signin from 'pages/signin';
import Signup from 'pages/signup';
import Home from 'pages/home';
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
];
export default AllRoutes;
