import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Login from '../../auth/login'
import Slidebar from '../../components/sidebar'
import { setClientToken } from '../../spotify'
import Favorite from '../favorite/favorite'
import Feed from '../feed/feed'
import Library from '../library/library'
import Player from '../player/player'
import Trending from '../trending/trending'

import './home.css'


export default function Homescreen() {

  const [token,setToken] = useState("");

  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    
    const hash=window.location.hash;

    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }

  },[])

  return !token ?(

    <Login/>
  ):(
    <Router>

      <div className='main-body'>
        
        
        <Slidebar/>

      <Routes>
      <Route path="/feed" element={<Feed/>} />
      <Route path="/library" element={<Library/>} />
      
      <Route path="/favorite" element={<Favorite/>} />
      <Route path="/player" element={<Player/>} />
      <Route path="/trending" element={<Trending />} />


    </Routes>

      </div>
    
    </Router>


  )
}
 