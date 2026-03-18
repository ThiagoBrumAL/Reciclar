//REACT ROUTER DOM
import { createBrowserRouter } from "react-router-dom";

//COMPONENTS
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home/Home";
import { SignIn } from "../pages/signin/SignIn";
import { SignUp } from "../pages/signup/SignUp";
import { Error } from "../pages/error/Error";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: "/",
            },
            {
                element: <SignIn />,
                path: "/sign-in",
            },
            {
                element: <SignUp />,
                path: "/sign-up",
            },
        ]
    },
    {
        element: <Error 
            statusCode="404"
        />,
        path: "/*"
    }
]);