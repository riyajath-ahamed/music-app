import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Slidebar from '../../components/sidebar'
import Favorite from '../favorite/favorite'
import Feed from '../feed/feed'
import Library from '../library/library'
import Player from '../player/player'
import Trending from '../trending/trending'

import './home.css'


export default function Homescreen() {
  return (
    <Router>

      <div className='main-body'>
        
        <Slidebar/>

      <Routes>
      <Route path="/" element={<Library/>} />
      <Route path="/feed" element={<Feed/>} />
      <Route path="/favorite" element={<Favorite/>} />
      <Route path="/player" element={<Player/>} />
      <Route path="trending" element={<Trending />} />


    </Routes>

      </div>
    
    </Router>


  )
}
 