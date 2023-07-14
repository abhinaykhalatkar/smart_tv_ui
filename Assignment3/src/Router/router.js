import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import tvApps from "../Pages/Home/tvAppsData";
import Login from "../Pages/Login/Login";

const routeMap = () => {
  return [
    {
      path: '/',
      element: <Signup />

    },
    {
      path: '/home',
      element: <Home tvApps={tvApps} />
    },

    {
      path: '/Login',
      element: <Login />
    }
  ];
};

export default routeMap;
