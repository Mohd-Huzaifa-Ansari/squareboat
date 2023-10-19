import React from 'react'
import "./Services.css"
import Button from './Button'

const Services = () => {
  return (
    <>
        <div className='service'>
        
               <div className='ourtext'>
                   <h3>Our range of services</h3>
                   <p>Wherever your users are, we have the skills to build software for that device.</p>
                </div>

                <div className='servicecard'>
                    <div className='servicebox'>
                        <div className='serviceimgbox'></div>
                        <div className='servicetxtbox'>
                            <h4>Web Development</h4>
                            <p>We build beautiful, responsive and feature-rich web based applications that solve real customer problems</p>
                        </div>
                    </div>
                    <div className='servicebox'>
                        <div className='serviceimgbox'></div>
                        <div className='servicetxtbox'>
                            <h4>App Development</h4>
                            <p>We build Android, iOS and PWA's that work great across multiple devices, screen sizes and resolutions. </p>
                        </div>
                    </div>
                    <div className='servicebox'>
                        <div className='serviceimgbox'></div>
                        <div className='servicetxtbox'>
                            <h4>UI/UX Design</h4>
                            <p>Grid Design Studio is known for crafting experiences through the power of UI/UX design.</p>
                        </div>
                    </div>
                </div>
           
                <div id='clientbtndiv'> <button id='clientbtn'>View Details</button></div> 

        </div>
    </>
  )
}

export default Services
