import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider} from "react-router-dom";
import Signup from "./componenets/Signup";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Signup />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
