import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPages";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ViewRecipe from "../Pages/Home/ViewRecipe/ViewRecipe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/blog",
                element: <Blogs></Blogs>

            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/register",
                element: <Register></Register>

            },
            {
                path: ":id",
                element: <ViewRecipe></ViewRecipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/allChef/${params.id}`)

            },
        ]
    },
]);

export default router;