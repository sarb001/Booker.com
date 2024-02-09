import React from 'react'

const About = () => {
  return (
    <div className="about m-16 lg:grid lg:grid-cols-2 md:gap-6 ">
        <div>
           <div className='text-4xl my-4'> ABOUT US </div>
           <div className='text-[20px]'>
            Welcome to Bookr, your ultimate destination for seamless hotel room bookings and unforgettable travel experiences. At Bookr, we understand that your journey is not just a trip but a collection of cherished memories waiting to be crafted.
            Our passion for hospitality drives us to redefine the way you discover and reserve accommodations, ensuring that every stay is marked by comfort, convenience, and delight. Whether you're a business traveler seeking a productive environment, a leisure explorer yearning for relaxation, or a family searching for bonding moments, Bookr has a room perfectly tailored to your needs.
           </div>
        </div>
        
        <div className='my-12'>
          <img src = "/src/assests/about0us.jpeg"  alt = "about-image" />
        </div>
    </div>
  )
}

export default About