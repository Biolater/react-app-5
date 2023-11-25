import React from 'react';
import { Navbar, Hero } from '../data';
import "./Header.css";

const Header = () => {
  return (
    <div className='hero-wrap'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header