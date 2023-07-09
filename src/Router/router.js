import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Sign-up/Sign-up";
const routeMap = () => {
    return [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/about',
        element: <SignUp />
      }
    ];
  };
  
  export default routeMap;
  