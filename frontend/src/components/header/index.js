import React from 'react';
import '../../styles/Header.css'
// import { Form, FormControl, Button } from 'react-bootstrap';
// import './SearchBar.css';
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import { Avatar } from "@mui/material";

function Header() {

  // const getLocal = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <header>
      <meta charset="utf-8"></meta>
      <title>IOT System</title>
      <div className='header'>
          <div class = "style_navbar__9VXbX" >
            <div class = "style_search">
              <button type="submit" class="btn btn-search">
                  <i class="fa fa-search fa-flip-horizontal"></i>
              </button>
              <input class = "search-bar" type='text' placeholder='Search'></input>
            </div>

            <div class = "info">
              {/* link image */}
              {/* <image src="https://kit.fontawesome.com/11cd3562ae.js" crossorigin="anonymous"></image> */}
            </div>
          </div>
      </div>
    </header>
    
  );
}

export default Header;
