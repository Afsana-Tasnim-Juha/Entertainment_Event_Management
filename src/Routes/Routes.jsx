import { createBrowserRouter } from "react-router-dom";
import Root from './../Layout/Root';
import Home from "../Page/Home/Home";

import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Contact from "../Page/Contact/Contact";
import ServiceDetail from './../Page/ServiceDetail/ServiceDetail';
import FAQ from "../Page/FAQ/FAQ";
import Footer from "../Page/Shared/Footer/Footer";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/event.json'),

            },

            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/serviceDetails/:id",
                element: <ServiceDetail></ServiceDetail>,
                loader: () => fetch('/event.json'),

            },


            {
                path: "/register",
                element: <Register></Register>,
            },

            {
                path: "/faqs",
                element: <FAQ></FAQ>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/serviceDetails",
                element: <ServiceDetail></ServiceDetail>,
            },
            {
                path: "/footer",
                element: <Footer></Footer>,
            },
        ],
    },
]);


export default Routes;