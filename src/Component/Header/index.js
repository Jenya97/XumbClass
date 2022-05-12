import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <ul>
            <li><NavLink to='/'>  Home</NavLink></li>
            <li><NavLink to='/about'>  About</NavLink></li>
            <li><NavLink to='/contact'>  Contact</NavLink></li>
            <li><NavLink to='/blog'>  Blog</NavLink></li>
        </ul>
    </header>
  )
}
