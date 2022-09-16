import React from 'react'
import './tob.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function Tob() {
  return (
    <div className='tob_bar_container'>
        <div className="top_bar_left">
          <div className="top_left_left">
            <MenuIcon />
          </div>
          <div className="top_left_right">
            <div className="search_icon">
              <SearchIcon />
            </div>
            <input type="text" placeholder='Search...' name="" id="" />
          </div>
        </div>
        <div className="top_bar_right">
          <BookmarksIcon />
          <div className="notify">
            <EmailIcon className="right_all" />
            <label className="label">58</label>
          </div>
          <NotificationsIcon className="right_all" />
            <FlagIcon className="right_all" />
            <img src="/images/im02.jpg" className="admin_pic" alt="admin" width={"30px"} height={"30px"}/>
            <div className="notify">
              <SettingsIcon className="right_all" />
            <label className="label">3</label>
          </div>
        </div>
    </div>
  )
}
