import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import HomePage from '../HomePage';
import Favourites from '../Favourites';
import Notification from '../Notification';


export default function BottomNavigationComponent() {
    const [value,setValue]=useState(0)
    const handleChange = (e,newValue) => {
        setValue(newValue);

    };
  return (
    <>
      {value === 0 && <HomePage />}
      {value === 1 && <Favourites />}
      {value === 2 && <Notification />}

        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels>
        <BottomNavigationAction  color='success' label="" icon={<HomeIcon/>} />
        <BottomNavigationAction  color='success' label="" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction  color='success' label="" icon={<NotificationsIcon />} />
        </BottomNavigation>

    </>

  )

}
