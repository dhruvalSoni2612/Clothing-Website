import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Men from './routes/Men.jsx'
import Home from './routes/Home.jsx'
import Cart from './routes/Cart.jsx'
import Wishlist from './routes/Wishlist.jsx'
import {Provider} from "react-redux";
import trendyClothingStore from './store/index.js'


const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {path:"/",element: <Home/>},
    {path:"/men",element:<Men/>},
    {path:"/cart",element: <Cart/>},
    {path:"/wishlist", element:<Wishlist/>}

  ],
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={trendyClothingStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
