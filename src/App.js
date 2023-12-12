import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider} from "react-router-dom";
import Auth from "./componenets/Auth";
import Products from './componenets/Products';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Products />
    },
    {
      path: '/auth',
      element: <Auth />
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
