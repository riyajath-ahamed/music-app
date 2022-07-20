import React from 'react'
import SidebarButton from './sidebarButton'
import "./slidebar.css"
import { SiFeedly } from 'react-icons/si';
import { HiTrendingUp } from 'react-icons/hi';
import { SiPlayerfm } from 'react-icons/si';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdLibraryMusic } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';

export default function Slidebar() {
  return (
    
    <div className='sidebar-container'>
        <img src='https://firebasestorage.googleapis.com/v0/b/musiccloud-d2195.appspot.com/o/ben-sweet-2LowviVHZ-E-unsplash%20(2).jpg?alt=media&token=fa6a7fad-7cfc-4467-bbd4-5a337a94e260' className='profile-img' alt='profile'/>
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<SiFeedly/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<HiTrendingUp/>}/>
        <SidebarButton title="Player" to="/player" icon={<SiPlayerfm/>}/>
        <SidebarButton title="Favorite" to="/favorite" icon={<MdFavoriteBorder/>}/>
        <SidebarButton title="Library" to="/library" icon={<MdLibraryMusic/>}/>
      </div>
      <SidebarButton title="Sign Out" to icon={<FaSignOutAlt/>}/>
    </div>

  )
}
