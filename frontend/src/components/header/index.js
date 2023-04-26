import React from 'react';
import '../../styles/Header.css'
// import { Form, FormControl, Button } from 'react-bootstrap';
// import './SearchBar.css';

function Header() {
  return (
    <div className='header'>
        <div className='search-bar'>
            <button className='btn-search'>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type='text' placeholder='Search'></input>
        </div>
    </div>
  );
}

export default Header;
