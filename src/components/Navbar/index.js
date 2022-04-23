import React from 'react'

import { Link } from "react-router-dom"

import "@Styles/Navbar.css"

export function Navbar({ path }) {
  return (
    <nav className='navbar-container'>
        <span className='wrapping-letters--logo'>
            WL
        </span>
        <div className='navbar-container__content'>
            {/* <Link to="">Getting started</Link> */}
            <a href="https://github.com/srtager555/wrapping-letters" target="_blanks">GitHub</a>
            <Link to="/docs">Documentation</Link>
            <div className='navbar-menu__button'>
                <span className='navbar-menu__button--line'></span>
                <span className='navbar-menu__button--line'></span>
            </div>
        </div>
    </nav>
  )
}
