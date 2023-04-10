
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from '../src/routes/root'
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Home from "./Pages/Home";
import CardPage from "./Pages/CardPage";
import { Route } from "react-router-dom";
import Writers from "./Pages/Writers";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<CardPage />} />
      <Route path="series" element={<Series />} />
        <Route path="series/:id" element={<CardPage />} />
      <Route path="writers" element={<Writers />} />
      
      
      
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

