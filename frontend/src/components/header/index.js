import React from 'react';
import '../../styles/Header.css'
import { ReactComponent as InfoIcon } from "./info.svg";

function Header() {

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
              <input class="shadow btn rounded-5 search-bar" type='text' placeholder='Search'></input>
            </div>

            <div class = "info">
              <frame class = "infoLogo shadow btn rounded-5">
                  <InfoIcon></InfoIcon>
              </frame>
              <frame style={{textAlign: "center"}} margin="left" class="text">Username</frame>
            </div>
          </div>
          </div>
    </header>
    
  );
}

export default Header;
