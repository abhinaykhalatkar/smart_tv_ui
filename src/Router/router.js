import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Sign-up/Sign-up";
import tvApps from "../Pages/Home/tvAppsData";
const routeMap = () => {
    return [
      {
        path: '/',
        element:<Home tvApps={tvApps} />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ];
  };
  
  export default routeMap;
  