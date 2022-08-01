import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons';
import {FaPlay} from 'react-icons/fa'
import APIKit from '../../spotify';
import './library.css';
import { useNavigate } from 'react-router-dom';

export default function Library() {
   const[playlist,setPlaylist]= useState(null);

  useEffect(() => {

    APIKit.get('me/playlists').then(function(response){
      // console.log(response.data);
      setPlaylist(response.data.items);
      console.log(response.data.items);
    });

  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", {state: {id: id} });

  }
  

  return (
    <div className='screen-container'>
      <div className='library-body'>
      {playlist?.map((playlist) => (
        <div className='playlist-card'
        key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
          
          <img src={playlist.images[0].url} className='playlist-image' alt='playlist-art' />
          <p className='playlist-title'>{playlist.name}</p>
          <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
          <div className='playlist-fade'>
            <IconContext.Provider value={{size:'25px', color:'#7a5195'}} >
              <FaPlay/>
            </IconContext.Provider>

          </div>

        </div>
      ))}
      </div>
    </div>
  )
}
