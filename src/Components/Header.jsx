import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './Header.css';
import whiteArrow from '../assets/down-arrow-white.svg';
import SocialMedia from './SocialMedia';

function Header() {
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false);
  const isInsideSocial = useRef(null);

  const location = useLocation();
 useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.replace('#', ''));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  function arrowHandler() {
    setIsSocialMediaOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isInsideSocial.current &&
        !isInsideSocial.current.contains(e.target)
      ) {
        setIsSocialMediaOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header id="header">
      <div className="logo">
        {'</>'}
        <span> Developer</span>
      </div>
      <nav id="navbar-header">
        <ul>
          <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li className="socialMedia-nav" ref={isInsideSocial}>
            <p onClick={arrowHandler}>Accounts</p>
            <img
              src={whiteArrow}
              onClick={arrowHandler}
              className="drop-arrow"
              style={{
                transform: isSocialMediaOpen
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
            <div className={isSocialMediaOpen ? 'dropdown open' : 'dropdown'}>
              <SocialMedia />
            </div>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="shadows">
        <div className="shadow1"></div>
        <div className="shadow2"></div>
      </div>
    </header>
  );
}

export default Header;
