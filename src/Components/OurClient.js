import React from 'react'
import './Ourclients.css'
import Clientcard from '../ClientsCard/Clientcard'
import Button from './Button'

const OurClient = () => {
  return (
    <>
         
         <div className='outer'>
            <div className='clientwrapper'></div>

              <h1>GREAT SOFTWARE EXPERIENCES</h1> 
         
             <div className='ourclients'>

                <div className='ourtext'>
                 <h3>Our clients</h3>
                 <p>More than 100+ businesses have trusted Squareboat to grow using technology.</p>
                </div>

           



        

        
            
        </div>
        <div className='clients'>

                 <Clientcard/>


        </div>
              {/* <div> <Button /></div> */}

             <div id='clientbtndiv'> <button id='clientbtn'>Show More</button></div> 
        </div>  

        

        
    </>
  )
}

export default OurClient
