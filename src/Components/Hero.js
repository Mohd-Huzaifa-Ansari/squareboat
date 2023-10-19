import React from 'react'
import './Hero.css'
import heroimg from '../Assets/hero-illustration.svg'

const Hero = () => {
  return (
    <>
         <div className='wrapper'>
            <div className='left'>
                <h1>Great products for great ideas.</h1>
                <p>We build beautiful and scalable technology solutions.</p>
                <div className='herobtn'>
                    <button>Company Deck</button>
                    <button>See Our Work</button>
                </div>
            </div>
            <div className='right'>
                <img src={heroimg} />
            </div>
         </div>
    </>
  )
}

export default Hero
