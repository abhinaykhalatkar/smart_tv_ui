import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Sign-up/Sign-up";
import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Sign-up",
        element: <SignUp />,
    }
]);
export default router;