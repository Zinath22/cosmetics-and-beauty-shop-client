import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Login from "../Pages/Login/Login";
// import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Product from "../Pages/Product/Product";
import Update from "../Pages/Update/Update";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

import MyCart from "../Pages/MyCart/MyCart";




const Routes = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('/data.json')
        },
        {
           path: '/addProducts',
           element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
           
        },
        {
            path: '/myCart',
            element:<PrivateRoute><MyCart></MyCart> </PrivateRoute>,
            loader:() => fetch('http://localhost:5000/cart')
          },
       
        {
          path: '/products/:id',
          element: <Product></Product>,
          loader: () => fetch('http://localhost:5000/product')
        },
       
        {
         path: '/update/:id',
         element: <PrivateRoute> <Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        // {
        //     path: '/productDetail/:id',
        //     element: <ProductDetails></ProductDetails>,
        //     loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        // },
        {
            path:'/productDetail/:id',
            element: <PrivateRoute><ProductDetails></ProductDetails> </PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
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
       
    