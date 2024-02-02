import React from 'react'

const Facilities = () => {
  return (
    <div className="facilties-component">
       <h2> Facilities  </h2>
       
         <div>

            <div>
            <span> <img src = "/src/assests/Facilities.jpeg"  alt = "stars-restaurant" /> </span>
            </div>
             <div> 
              <h2> 3 Michelin Stars Restaurant, Vézère </h2>
                <span>
                A brasserie inspired by French cuisine, a fresh and modern place to visit and enjoy dishes always handmade of the best ingredients of the season.
                </span>
            </div>
        </div>

        <div>
          <div>
            <h2> The Penthouse Bar, An iconic american bar </h2>
            <span>  
              The cozy bar area accompanying the Penthouse is a classic cocktail bar at it's finest. Our experienced bartenders are here to offer you both the classic bewerages and the newest global trends.
            </span>
          </div>

          <div>
            <span> <img src = "/src/assests/penthouse.jpeg" alt = "penthouse" /> </span>
          </div>
        </div>

        <div>
            <div> 
               <img src = "/src/assests/spa.jpeg"  alt = "beach"  /> 
            </div>

            <div>
               <h2> The Spa. Refresh Yourself </h2>
               <span>
                  Whether you are in search of a well-appointed gym or a pampering moment on the massage table and inside the warm saunas, you can always find a place for yourself at our spa.
               </span>
            </div>
        </div>

    </div>
  )
}

export default Facilities