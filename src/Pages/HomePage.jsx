import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const {counter}=useSelector(state=>state);
    console.log(counter)
  return (
    <div>HomePage</div>
  )
}

export default HomePage