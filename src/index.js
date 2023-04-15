
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from '../src/routes/root'
import Movies from './Pages/Movies';
import Blog from './Pages/Blog'
import Home from "./Pages/Home";
import CardPage from "./Pages/CardPage";
import BlogPage from "./Pages/BlogPage";
import { Route } from "react-router-dom";
import Writers from "./Pages/Writers";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Home />} />
      <Route path="reviews" element={<Movies />} />
        <Route path="reviews/:id" element={<CardPage />} />
      <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPage />} />
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

