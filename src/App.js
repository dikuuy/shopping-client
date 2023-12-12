import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider} from "react-router-dom";
import Auth from "./componenets/Auth";

const router = createBrowserRouter(
  [
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
