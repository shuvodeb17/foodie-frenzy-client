import {
    createBrowserRouter,
} from "react-router-dom";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Layout from "../Layout/Layout";

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
                element: <ChefRecipes />,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

export default router;