import React from 'react'
import '../Components/Navbar.scss'
export default function Navbar() {
  return (
    <div className='navbar'>
<img src="./Assets/logo.png" alt="logo"></img>
<ul className='nav-links'>
    <li>
        <a href="/" className='nav-link'>home</a>
    </li>
    <li>
        <a href="/" className='nav-link'>about</a>
    </li>
    <li>
        <a href="/" className='nav-link'>tours</a>
    </li>
</ul>
    </div>
  )
}
