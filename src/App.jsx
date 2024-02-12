
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './Pages/Cart/Cart'
import Rooms from './Pages/Rooms/Rooms'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import Navbar from './Pages/Navbar/Navbar'
import SpecificRoom from './Pages/SpecificRoom'
import NotFound from './Pages/404/NotFound'

function App() {

  return (
   <>
    <Navbar />
     <Routes> 
        <Route path = "/"         element = {<Home />}>  </Route>
        <Route path = "/gallery"  element = {<Gallery />}>  </Route>
        <Route path = "/contact"  element = {<Contact />}>  </Route>
        <Route path = "/rooms"    element = {<Rooms />}>  </Route>
        <Route path = "/room/:roomid"    element = {<SpecificRoom />}>  </Route>

        <Route path = "/cart"     element = {<Cart />}>  </Route>

        <Route path = "*"     element = {<NotFound />}>  </Route>
     </Routes>
  </>
  )
}

export default App
