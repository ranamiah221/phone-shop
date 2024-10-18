import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayouts/MainLayouts";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Favorites from './../../pages/Favorites/Favorites';
import Login from './../../pages/Login/Login';
import PhoneDetails from "../../pages/PhoneDetails/PhoneDetails";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('phones.json')
            },
            {
              path:'/phones/:id',
              element:<PhoneDetails></PhoneDetails>,

            },
            {
                path:'/favorites',
                element:<Favorites></Favorites>,
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]

    }
])

export default Route;