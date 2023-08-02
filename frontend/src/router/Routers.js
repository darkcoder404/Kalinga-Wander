import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import DummyLogin from '../pages/DummyLogin'
import Admin from '../pages/Admin'
import AdminDashboard from '../pages/AdminDashboard'
import CreateTour from '../pages/CreateTour'
import { Navigate } from 'react-router-dom'
import Payment from '../pages/Payment'
import About from '../pages/About'
// import Razorpay from '../pages/Razorpay'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/login' element={<DummyLogin/>} />
         <Route path='/loginuser' element={<Login/>} />
         <Route path='/loginadmin' element={<Admin/>} />
         <Route path='/admindashboard' element={<AdminDashboard/>} />
         <Route path='/admindashboard/createtour' element={<CreateTour/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/payment' element={<Payment/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
      </Routes>
   )
}

export default Routers