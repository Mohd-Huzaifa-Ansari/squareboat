import React from 'react'
import "./MeetCaptain.css"
import heroimg from '../Assets/gaurav-hero.png'

const MeetCaptain = () => {
  return (

    <>
        <div className='outer'>
            <div className='clientwrapper'></div>

            <div className='meetcaptainbox'>
                     <div className='meettxtbox'>
                     <h3>Meet the Captain</h3>
                   <p>Gaurav has over <span>14+ years of experience</span> in developing and maintaining <span>large and scalable  web and mobile applications</span> end-to-end including product conceptualization, design, backend and frontend development, deployment, server management, uptime, reliability, performance and scalability. People like to call him a <span>"full stack" </span>developer.</p>
                     </div>
                     <div className='meetimgbox'>
                        <img src={heroimg}/>
                        <p><span>Gaurav Gupta</span>, Captain</p>
                     </div>
            </div>
        </div>    
    </>
  )
}

export default MeetCaptain
