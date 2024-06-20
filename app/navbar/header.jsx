"use client"
import React, { useState, useEffect } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faBars, faStar, faCompass, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import DropdownComponent from './dropdown/dropdown';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    // Set initial state based on window width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items = [
    { label: 'People-community', link: '#discover' },
    { label: 'Places-Venues', link: '#places' },
    { label: 'Programs-Events', link: '#programs' },
    { label: 'Products-Store', link: '#products' },
    { label: 'Blogs', link: '#Blogs' }
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src="./Logo.png" alt="logo" />
        {isMobile && (
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        {!isMobile && (
          <>
            <ul id='dropdown'>
              <li>
                <FontAwesomeIcon icon={faCompass} />
                <DropdownComponent title="Explore" items={items} />
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faStar} />
                <a href="#">Hobbies </a>
                <FontAwesomeIcon icon={faCaretDown} />
              </li>
              <li>
                <button className="icon-button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </li>
              <li>
                <button className="icon-button">
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </li>
              <li>
                <a href="#" className="sign-in">Sign In</a>
              </li>
            </ul>
          </>
        )}
        {isMobile && (
          <ul>
            <li>
              <button className="icon-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </li>
            <li>
              <button className="icon-button">
                <FontAwesomeIcon icon={faBell} />
              </button>
            </li>
            <li>
              <a href="#" className="sign-in">Sign In</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
