// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown, faBookmark, faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DropdownComponent from './dropdown/dropdown';

const Header = () => {
  // Dropdown items
  const items = [
    { label: 'People-community', link: '#discover' },
    { label: 'Places-Venues', link: '#places' },
    { label: 'Programs-Events', link: '#programs' },
    { label: 'Products-Store', link: '#products' },
    { label: 'Blogs', link: '#Blogs' }
  ]

  return (
    <header className="header">
      <div className="logo">
        <img src="https://via.placeholder.com/50" alt="hobbycue logo" className="logo-image" />
        <div className="brand">
          <span className="brand-name">hobbycue</span>
          <span className="tagline">Your Hobby, Your Community</span>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here..." className="search-input" />
        <button type="button" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <nav className="nav">
        <ul>
          <li><DropdownComponent title="Explore" items={items} FontAwesomeIcon icon={faCaretDown} /></li>
        </ul>
        <ul>
          <li><a href="#">Hobbies <FontAwesomeIcon icon={faCaretDown} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faBookmark} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faBell} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
          <li><a href="#" className="sign-in">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
