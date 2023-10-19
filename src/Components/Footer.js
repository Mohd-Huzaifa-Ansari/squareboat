import React from 'react'
import './Footer.css'

import redlogo from '../Assets/gptw-logo.png'
import certi from '../Assets/top-website-development-companies.svg'
import gd from '../Assets/Grid-design-logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className='row'>

        <div className='fourcol'>
            <img  src={redlogo}/>
            <img  src={certi}/>
        </div>
        <div className='fourcol'>
            <ul>
                <li><a>Clients</a></li>
                <li><a>Tech Stack</a></li>
                <li><a>Our Team</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Grid Design</a></li>
            </ul>
        </div>
        <div className='fourcol'>
        <ul>
                <li><a>Open Source</a></li>
                <li><a>Blog</a></li>
                <li><a>Careers</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Term & Conditions</a></li>
            </ul>
        </div>
        <div className='fourcol'>
            <h4>Our Creative Agency </h4>
            <img src={gd} />
        </div>
      </div>
      <div className='credit'><p>© Squareboat Solutions Private Limited 2023</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
    </footer>
  )
}

export default Footer
