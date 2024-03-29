import { createBrowserRouter  } from "react-router-dom"
import About from "../../Pages/About/About"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor"
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers"
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard"
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment"
import Payment from "../../Pages/Dashboard/Payment/Payment"
import Home from "../../Pages/Home/Home/Home"
import DashboardLayout from "../../Pages/Layout/DashboardLayout"
import Main from "../../Pages/Layout/Main"
import Login from "../../Pages/Login/Login"
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError"
import SignUp from "../../Pages/SignUp/SignUp"
import AdminRoute from "../AdminRoute/AdminRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children:[
           {
                path: '/',
                element: <Home></Home>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/signup',
            element:<SignUp></SignUp>
           },
           {
               path: '/appointment',
               element: <PrivateRoute><Appointment> </Appointment> </PrivateRoute>  
           },           
           {
               path: '/about',
               element: <About></About>
           },           
                      
        ]        
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout> </DashboardLayout> </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor> </AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute> <ManageDoctors></ManageDoctors> </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute> <Payment></Payment> </AdminRoute>,
                loader: ({params})=> fetch(`http://doctors-portal2.sifatniloy.com/bookings/${params.id}`)

            },
        ]
    }
])