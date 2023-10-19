import React from 'react'
import './Header.css'
import logo  from '../Assets/logo.png'

const Header = () => {
  return (
    <nav>
      <div className='imgbox'><img src={logo}/></div>
      <div className='links'>
        <ul>
            <li><a>Clients</a></li>
            <li><a>Tech Stack</a></li>
            <li><a>CrewMate</a></li>
            <li><a>Our Teams</a></li>
            <li><a>Careers</a></li>
            <li><a><span>Contact</span></a></li>
            

        </ul>
      </div>
      

    
    </nav>
  )
}

export default Header
