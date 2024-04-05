import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Moives from './components/Moives'
import Watchlist from './components/Watchlist'
import TopRated from './components/Top-Rated'
import Upcoming from './components/Upcoming'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { MovieContext } from './components/MovieContext'
import MovieContent from './components/MovieContent'

function App() {
  const [watchlist,setWatchlist] = useState([])

  const handleAddtoWatchlist = (movieObj)=>{
    let newWatchlist = [...watchlist,movieObj]
    setWatchlist(newWatchlist)
    localStorage.setItem('movies',JSON.stringify(newWatchlist))
   
  }
  const handleDeleteWatchlist = (movieObj)=>{
    let updatedwatchlist = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchlist(updatedwatchlist)
    localStorage.setItem('movies',JSON.stringify(updatedwatchlist))
  }
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('movies')
    if (!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <div>
      <BrowserRouter>
      <MovieContext.Provider value={{handleAddtoWatchlist,watchlist,setWatchlist,handleDeleteWatchlist}}>
        <NavBar />
        <Routes>
          <Route path='/' element={<><Banner /> <Moives /></>} />
          <Route path='/Top-Rated' element={<TopRated />}/>
          <Route path='/Upcoming-Movies' element={<Upcoming />}/>
          <Route path='/watchlist' element={<Watchlist/>} />
          <Route path='/MovieContent/:id' element={<MovieContent/>}/>
        </Routes>
      </MovieContext.Provider>
      </BrowserRouter>
    </div>
  )
}
export default App
