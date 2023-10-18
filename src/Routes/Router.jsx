import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Login from "../Pages/Login/Login";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
// import AddProducts from "../Pages/AddProducts/AddProducts";

const Routes = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
           path: '/addProducts',
           element: <AddProducts></AddProducts>
        },
        {
          path: '/myCart',
          element: <MyCart></MyCart>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
}
])

export default Routes;
       
    