//REACT ROUTER DOM
import { createBrowserRouter } from "react-router-dom";

//COMPONENTS
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: "/",
            }
        ]
    }
]);