import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/Home.js'

import Layout from './components/Layout/Layout.js'

import SignUp from './components/SignUp.js'
import Login from './components/LogIn.js'

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
   </Route>
  ) 
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
       <RouterProvider router={router}/> 
    
  </React.StrictMode>,
)