import { createBrowserRouter } from "react-router-dom";
import Root from "../Main/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AllArtsCraft from "../components/AllArtsCraft/AllArtsCraft";
import AddCraftItem from "../components/AddCraftItem/AddCraftItem";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import MyArtCraft from "../components/MyArtCraft/MyArtCraft";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/artCraft')
            },
            {
                path: '/allArts',
                element: <AllArtsCraft></AllArtsCraft>
            },
            {
                path: '/add',
                element: <PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>
            },
            {
                path: '/myList',
                element: <PrivetRoute><MyArtCraft></MyArtCraft></PrivetRoute>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/artCraft/${params.id}`)
            },

        ]
    }
])

export default router;