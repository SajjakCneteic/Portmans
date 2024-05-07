import React from 'react'
import { Routes } from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'
import ShopPage from './ShopPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Routes path="/" element={<HomePage />} />
        <Routes path="/login" element={<LogIn />} />
        <Routes path="/signup" element={<SignUp />} />
        <Routes path="/shop" element={<ShopPage/>} />

    </Routes>
  )
}

export default AllRoutes