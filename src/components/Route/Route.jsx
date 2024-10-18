import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayouts/MainLayouts";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>

    }
])

export default Route;