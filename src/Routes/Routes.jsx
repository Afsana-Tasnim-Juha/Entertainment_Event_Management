import { createBrowserRouter } from "react-router-dom";
import Root from './../Layout/Root';
import Home from "../Page/Home/Home";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ],
    },
]);


export default Routes;