import React from 'react'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import AuthLayout from './Layout/AuthLayout'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Registration'

import MainLayout from './Layout/MainLayout'
import HomePage from './pages/User/HomePage'
import AddAppointment from './pages/User/AddAppointment'
import Appointments from './pages/User/Appointments'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/addappointment' element={<AddAppointment/>}/>
          <Route path='/appointments' element={<Appointments/>} />
        </Route>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>


    </>
  )
}

export default App