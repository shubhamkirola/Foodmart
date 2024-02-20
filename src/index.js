import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';
import Body from './Components/Body';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
import Shimmer from './Components/Shimmer';


const Grocery = lazy(() => import('./Components/Grocery'))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error/>
  }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
  (<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
