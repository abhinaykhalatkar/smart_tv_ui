import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import tvApps from "../Pages/Home/tvAppsData";
import Login from "../Pages/Login/Login";

const routeMap = () => {
    return [
      {
        path: '/',
        element:<Home tvApps={tvApps} />
      },
      {
        path: '/sign-up',
        element: <Signup />
     
      },
      {
        path: '/Login',
        element: <Login />
      }
    ];
  };
  
  export default routeMap;
  