import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Bookshop from './components/bookshop/Bookshop';
import ErrorPage from './components/ErrorPage/ErrorPage';
import MostRead from './components/MostRead/MostRead';
import Contact from './components/Contact/Contact';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/listed book',
        element: <Bookshop></Bookshop>

      },

      {
        path: '/most read books',
        element: <MostRead></MostRead>
      },
      
      {
        path: '/contact' ,
        element: <Contact></Contact>
      },

      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Books.json')
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
