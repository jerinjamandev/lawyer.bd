import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Lawyerdetails from "../Pages/Lawyerdetails";
import MyBookings from "../Pages/MyBookings";
import NotFound from "../Pages/Notfound";
import Root from "../Root/Root";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },

        {
          path:'/my-booking',
          element:<MyBookings></MyBookings>

        },

      {
        path:'*',
        element:<NotFound></NotFound>
      },

        {
          path:'/lawyer/:id',
          element:<Lawyerdetails></Lawyerdetails>,
          loader:({params})=>{
            return fetch("/lawyerdata.json")
            .then(res=>res.json())
            .then(data=>{

              const find=data.find(item=>item.LicenseNumber===params.id)

              return find||null


            })
          }
        },


        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }

      ]
    },
  ]);

  