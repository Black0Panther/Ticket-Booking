import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import InMovie from './Pages/InMovie'
import { Route,Routes } from 'react-router-dom'
import Booking from './Pages/Booking'
import Receipt from './Components/Recipt'
import SignUp from './Pages/SignUp'

function App() {

const items = [
    {
      id:"fighter2",
        name:"Fighter 2",
        image : "/images/movie1.png",
        category : "action",
        language : "Hindi",
        rating : 8.6,
        duration : "2h 26m"
    },
    {
      id:"inception",
        name:"Inception",
        image : "/images/movie2.png",
        category : "Romantic",
        language : "English",
        rating : 7.2,
        duration : "2h 14m"
    },
              { 
                id:"insidious",
        name:"Insidious", 
        image : "/images/movie5.png",
         category : "Drama",
        language : "English",
        rating : 6.8,
        duration : "2h 30m"
      },
 
        { 
          id:"intersteller",
        name:" Interstellar ",
        address:"1.4 miles away",
        image : "/images/movie4.png",
         category : "Adventure",
        language : "Hindi",
        rating : 7.6,
        duration : "1h 56m"
      },
      
         { 
          id:"fukrey",
        name:"Fukrey",
        address:"1.2 miles away",
        image : "/images/movie3.png",
         category : "Comedy",
        language : "English",
        rating : 8.1,
        duration : "2h 10m"    
      },
        { 
        name:"Insidious",
        image : "/images/movie6.png",
         category : "Drama",
        language : "Hindi",
        rating : 8.1,
        duration : "2h 02m"
      }
]

  return (
    <>
{/* <Login></Login>   */}
<Navbar></Navbar>
<Routes> 
  <Route path='/' element={<Home items={items}/>}></Route>
  <Route path='/movies/:movieId' element = {<InMovie movieItems={items}/>}></Route>
  <Route path='book/:movieId' element = {<Booking movieItems={items}/>}></Route>
   <Route path="/receipt" element={<Receipt />} />
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/signup' element={<SignUp/>}></Route>
</Routes>
  </>
  )
}

export default App
