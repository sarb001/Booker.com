import React from 'react'
import Header from './Header/Header'
import About from './About/About'
import BestRooms from './BestRooms/BestRooms'
import Testimonials from './Testimonials/Testimonials'
import Facilities from './Facilites/Facilities'

const Home = () => {
  return (
    <section>
       <Header />
       <About />
       <BestRooms />
       <Facilities  />
       <Testimonials />
    </section>
  )
}

export default Home