import React from 'react'

const Navbar = () => {
  return (
    <div id="navbar" className='navbar'>
        <nav className='navbar__list'>
            <li className='navbar__list-item'><a className='navbar__list-item_link' href="#home">Home</a></li>
            <li className='navbar__list-item'><a className='navbar__list-item_link' href="#skills">Skills</a></li>
            <li className='navbar__list-item'><a className='navbar__list-item_link' href="#projects">Projects</a></li>
            <li className='navbar__list-item'><a className='navbar__list-item_link' href="#about">About</a></li>
            <li className='navbar__list-item'><a className='navbar__list-item_link' href="#footer">Footer</a></li>
        </nav>
    </div>
  )
}

export default Navbar