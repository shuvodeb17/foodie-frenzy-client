import {
    createBrowserRouter,
} from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/allChef')
            },
            {
                path: '/chef-recipes/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])

export default router;