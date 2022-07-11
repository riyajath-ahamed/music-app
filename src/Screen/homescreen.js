import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Favorite from './favorite'
import Feed from './feed'
import Library from './library'
import Player from './player'
import Trending from './trending'


export default function Homescreen() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Library/>} />
      <Route path="/feed" element={<Feed/>} />
      
      <Route path="/favorite" element={<Favorite/>} />
      <Route path="/player" element={<Player/>} />
      <Route path="trending" element={<Trending/>} />


    </Routes>
    </Router>


  )
}
 