import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;