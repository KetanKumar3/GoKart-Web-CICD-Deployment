import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import LatestProducts from '../components/LatestProducts'
import BestSelling from '../components/BestSelling'
import Specification from '../components/Specification'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar className="relative" />
        <Hero className="relative" />
        <LatestProducts />
        <BestSelling />
        <Specification />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home