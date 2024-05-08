import React from 'react'
import { useSelector } from 'react-redux'
import HomeCarousel from '../components/HomeCarousel';
import ProductSection from '../components/ProductSection';

const HomePage = () => {
    const {counter}=useSelector(state=>state);
    console.log(counter)
  return (
    <div>
<HomeCarousel/>
<ProductSection/>
    </div>
  )
}

export default HomePage