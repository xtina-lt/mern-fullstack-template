import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header id="page-nav-bar"
    // class="hide-nav"
    >
      <img className="logo" src={logo} alt="logo" />
      <nav id="site-nav">
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </nav>
      <nav id="user-nav">
        <button>Log In</button>
        <a className="hide">⚙️</a>
      </nav>
    </header>
  )
}

export default Header