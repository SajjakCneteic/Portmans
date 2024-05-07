import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'
import ShopPage from './ShopPage'
import HomePage from './HomePage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<ShopPage/>} />

    </Routes>
  )
}

export default AllRoutes