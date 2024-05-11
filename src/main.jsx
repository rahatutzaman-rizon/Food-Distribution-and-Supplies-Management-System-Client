import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Supply from './Pages/Home/Supply/Supply';
import Dashboard from './Pages/Dashboard/Dashboard';
import App from './App';
import DetailProduct from './Pages/Home/Supply/DetailProduct';
import { PieChart } from 'recharts';
import AllSupplies from './Pages/Dashboard/AllSupplies';
import AddSupply from './Pages/Dashboard/AddSupply';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supply",
        element: <Supply></Supply>,
      },
      {
        path: "/products/:id",
        element: <DetailProduct></DetailProduct>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path:"/dashboard/piechart",
            element:<PieChart></PieChart>,
            loader:()=>fetch('http://localhost:5000/products'),
          },
          {
            path:"/dashboard/all-supplies",
            element:<AllSupplies></AllSupplies>,
            loader:()=>fetch('http://localhost:5000/products'),
          },
          {
            path:"/dashboard/add-supply",
            element:<AddSupply></AddSupply>,
            loader:()=>fetch('http://localhost:5000/products'),
          },

        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


